"use client";
import { Center, Loader } from "@mantine/core";

export default function Loading() {
  return (
    <Center h={300}>
      <Loader size="lg" variant="dots" />
    </Center>
  );
}
