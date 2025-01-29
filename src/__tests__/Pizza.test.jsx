import { render, cleanup } from "@testing-library/react";
import { afterEach, expect, test } from "vitest";
import Pizza from "../Pizza";

afterEach(cleanup);

test("alt text renders on image", () => {
  const name = "My Favorite Pizza";
  const src = "https://picsum.photos/200";
  const { getByRole } = render(
    <Pizza name={name} description="super cool pizza" image={src} />
  );

  const img = getByRole("img");

  // Validate src (use .toContain to avoid absolute URL issues)
  expect(img.src).toContain(src);

  // Validate alt text
  expect(img.alt).toBe(name);
});
