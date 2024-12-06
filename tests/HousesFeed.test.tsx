import { act, render, screen, waitFor } from "@testing-library/react";
import HousesFeed from "../src/features/housesFeed/HousesFeed";
import { afterEach, describe, expect, it, vi } from "vitest";
import { mockAllIsIntersecting } from "react-intersection-observer/test-utils";

vi.mock("../src/features/housesFeed/_api/fetchHouses", () => ({
  default: vi.fn((page: number, perPage: number) => {
    const startId = (page - 1) * perPage;
    const houses = Array.from({ length: perPage }, (_, index) => ({
      id: startId + index,
      address: "Address",
      homeowner: "Homeowner",
      price: 9999,
      photoURL: "image",
    }));

    return Promise.resolve({
      ok: true,
      houses,
    });
  }),
}));

afterEach(() => {
  vi.clearAllMocks();
});

describe("HousesFeed", () => {
  it("renders the HousesGroup component", async () => {
    render(<HousesFeed />);
    const housesGroup = await screen.findByTestId("houses-group");
    expect(housesGroup).not.toBeNull();
    expect(housesGroup.tagName).toBe("DIV");
  });

  it("renders 12 houses when fetchHouses returns 12 items", async () => {
    render(<HousesFeed />);
    const houseItems = await screen.findAllByTestId("house-item");
    expect(houseItems).toHaveLength(12);
  });

  it("fetches more houses when the intersection observer triggers", async () => {
    const mockFetchHouses = vi.mocked(
      (await import("../src/features/housesFeed/_api/fetchHouses")).default
    );

    render(<HousesFeed />);

    const initialHouses = await screen.findAllByTestId("house-item");
    expect(initialHouses).toHaveLength(12);

    act(() => {
      mockAllIsIntersecting(true);
    });

    expect(mockFetchHouses).toHaveBeenCalledTimes(2);

    await waitFor(async () => {
      const updatedHouses = await screen.findAllByTestId("house-item");
      expect(updatedHouses).toHaveLength(24);
    });
  });
});
