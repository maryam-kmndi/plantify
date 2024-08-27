import {
  Button,
  FormLabel,
  HStack,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
import FormBox from "../FormBox";
import { FormEvent, useRef } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const Schema = z
  .object({
    min: z
      .number({
        invalid_type_error: "Min price must be provided and be a number",
      })
      .min(10, { message: "Price start at $10" })
      .max(1000, { message: "Min price must be less than $1000" })
      .optional(),
    max: z
      .number({
        invalid_type_error: "Max price must be provided and be a number",
      })
      .min(10, { message: "Max price must be at least $10" })
      .max(1000, { message: "Maximum price is $1000" })
      .optional(),
  })
  .refine(
    (data) => {
      if (data.min === undefined && data.max === undefined) {
        return false;
      }
      if (data.min !== undefined && data.max !== undefined) {
        return data.min <= data.max;
      }
      return true;
    },
    {
      message: "Min price must be less than or equal to max price",
      path: ["max"],
    }
  );

type FormData = z.infer<typeof Schema>;

const PriceSelector = () => {
  // const minRef = useRef<HTMLInputElement>(null);
  // const maxRef = useRef<HTMLInputElement>(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(Schema),
  });

  // const priceRange = { min: "", max: "" };
  // const handleSub = (event: FormEvent) => {
  //   event.preventDefault();
  //   if (minRef.current !== null)
  //     priceRange.min = parseInt(minRef.current.value).toFixed(2) + "$";
  //   if (maxRef.current !== null)
  //     priceRange.max = parseInt(maxRef.current.value).toFixed(2) + "$";
  //   console.log(priceRange);
  // };

  return (
    <form onSubmit={handleSubmit((data) => console.log(data))}>
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
            // ref={minRef}
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
            // ref={maxRef}
            focusBorderColor="#79A141"
            placeholder="$ 10.00"
            _placeholder={{ opacity: 0.4, color: "inherit" }}
            _focus={{ bg: "cartsColor" }}
          />
        </HStack>

        {/* <FormBox refrence={minRef} label="Min" value="$ 10.00" /> */}
        {/* <FormBox refrence={maxRef} label="Max" value="$ 900.00" /> */}

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
