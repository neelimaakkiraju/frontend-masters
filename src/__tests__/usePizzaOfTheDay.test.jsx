import {renderHook, waitFor} from "@testing-library/react"
import createFetchMock from "vitest-fetch-mock"
import {test,vi,expect} from "vitest"
import {usePizzaOfTheDay} from "../usePizzaOfTheDay"


const fetchMocker = createFetchMock(vi)
fetchMocker.enableMocks();

const testPizza = {
    id:"Big meat pizza",
    name:"big meat pizza",
    category:"Supreme",
    description:"Chiken pizza",
    image:"/public/pizzas/calabrese.webp",
    size:{S:12.25,M:16.25,L:20.25}

}


test("to be null on initial load", async () => {
  fetch.mockResponseOnce(JSON.stringify(testPizza));
  const { result } = renderHook(() => usePizzaOfTheDay(""));
  expect(result.current).toBeNull();
});


test("to call the API and give back the pizza of the day", async () => {
    fetch.mockResponseOnce(JSON.stringify(testPizza));
    const { result } = renderHook(() => usePizzaOfTheDay(""));
    await waitFor(() => {
      expect(result.current).toEqual(testPizza);
    });
    expect(fetchMocker).toBeCalledWith("./api/pizza-of-the-day");
  });