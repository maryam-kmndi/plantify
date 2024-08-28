import {
  Button,
  FormLabel,
  HStack,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useRef, useState } from "react";
import { priceFilterType } from "./Filter";
import { useActiveFilters } from "../../store/useActiveFilter";
import { SubmitHandler, useForm } from "react-hook-form";

// const Schema = z
//   .object({
//     min: z.number().optional(),
//     // .number({
//     //   invalid_type_error: "Min price must be provided and be a number",
//     // })
//     // .min(10, { message: "Price start at $10" })
//     // .max(1000, { message: "Min price must be less than $1000" })
//     max: z
//       .number({
//         invalid_type_error: "Max price must be provided and be a number",
//       })
//       .min(10, { message: "Max price must be at least $10" })
//       .max(1000, { message: "Maximum price is $1000" })
//       .optional(),
//   })
//   .refine(
//     (data) => {
//       if (data.min === undefined && data.max === undefined) {
//         return true;
//       }
//       if (data.min !== undefined && data.max !== undefined) {
//         return data.min <= data.max;
//       }
//       return true;
//     },
//     {
//       message: "Min price must be less than or equal to max price",
//       path: ["max"],
//     }
//   );

// type FormData = z.infer<typeof Schema>;

const PriceSelector = ({
  passPrice,
}: {
  passPrice: (arg: priceFilterType) => void;
}) => {
  const minRef = useRef<HTMLInputElement>(null);
  const maxRef = useRef<HTMLInputElement>(null);

  const { setActiveFilters, removeActiveFilters } = useActiveFilters();
  const [minInpErr, setMinInpErr] = useState<string>();

  const onSubmit: SubmitHandler<{
    max: number | undefined;
    min: number | undefined;
  }> = (event) => {
    const isMinFill = !isNaN(Number(event.min));
    const isMaxFill = !isNaN(Number(event.max));
    if (isMinFill || isMaxFill) {
      setActiveFilters("price");
      if (isMaxFill && isMinFill) {
        const minValue = event.min as number;
        const maxValue = event.max as number;
        if (minValue < maxValue) {
          setMinInpErr("");
          passPrice({
            max: maxValue,
            min: minValue,
          });
        } else {
          setMinInpErr("min must smaller than max");
        }
      } else if (isMinFill) {
        const minValue = event.min as number;
        passPrice({
          max: undefined,
          min: minValue,
        });
      } else if (isMaxFill) {
        const maxValue = event.max as number;
        passPrice({
          max: maxValue,
          min: undefined,
        });
      }
    } else {
      passPrice({
        max: undefined,
        min: undefined,
      });
      removeActiveFilters("price");
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<{ max: number | undefined; min: number | undefined }>({
    // resolver: zodResolver(Schema),
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <VStack
        align="left"
        color="textColor"
        my="1.5rem"
        pl="1rem"
        spacing="1.2rem"
      >
        <Text>Price Range</Text>

        <HStack spacing={{ xl: "5", lg: "3", base: "1.5" }}>
          <FormLabel
            display="grid"
            w="5rem"
            h="3rem"
            bg="cartsColor"
            borderRadius={5}
            cursor="pointer"
            m="0"
            htmlFor="min"
          >
            <Text color="gray.400" justifySelf="center" alignSelf="center">
              Min
            </Text>
          </FormLabel>
          <Input
            type="number"
            id="min"
            {...register("min", { valueAsNumber: true })}
            w="6rem"
            h="3rem"
            focusBorderColor="#79A141"
            placeholder="$ 10.00"
            _placeholder={{ opacity: 0.4, color: "inherit" }}
            _focus={{ bg: "cartsColor" }}
          />
        </HStack>

        <HStack spacing={{ xl: "5", lg: "3", base: "1.5" }}>
          <FormLabel
            display="grid"
            w="5rem"
            h="3rem"
            bg="cartsColor"
            borderRadius={5}
            cursor="pointer"
            m="0"
            htmlFor="max"
          >
            <Text color="gray.400" justifySelf="center" alignSelf="center">
              Max
            </Text>
          </FormLabel>
          <Input
            type="number"
            id="max"
            {...register("max", { valueAsNumber: true })}
            w="6rem"
            h="3rem"
            focusBorderColor="#79A141"
            placeholder="$ 10.00"
            _placeholder={{ opacity: 0.4, color: "inherit" }}
            _focus={{ bg: "cartsColor" }}
          />
        </HStack>
        {minInpErr && (
          <Text fontSize="sm" color="red.600">
            {minInpErr}
          </Text>
        )}
        {errors.min && (
          <Text fontSize="sm" color="red.600">
            {errors.min.message}
          </Text>
        )}
        {errors.max && (
          <Text fontSize="sm" color="red.600">
            {errors.max.message}
          </Text>
        )}

        <Button
          type="submit"
          bg="primaryColor"
          color="white"
          borderRadius={75}
          w="90%"
          fontWeight={200}
        >
          Set Price Range
        </Button>
      </VStack>
    </form>
  );
};

export default PriceSelector;
