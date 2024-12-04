import { render, screen } from "@testing-library/react";
import HousesFeed from "./HousesFeed";
import { describe, expect, it, vi } from "vitest";

vi.mock("./_api/fetchHouses", () => ({
  default: vi.fn(() =>
    Promise.resolve({
      ok: true,
      houses: [
        {
          id: 0,
          address: "4 Pumpkin Hill Street Antioch, TN 37013",
          homeowner: "Nicole Bone",
          price: 105124,
          photoURL:
            "https://image.shutterstock.com/image-photo/big-custom-made-luxury-house-260nw-374099713.jpg",
        },
        {
          id: 1,
          address: "495 Marsh Road Portage, IN 46368",
          homeowner: "Rheanna Walsh",
          price: 161856,
          photoURL:
            "https://media-cdn.tripadvisor.com/media/photo-s/09/7c/a2/1f/patagonia-hostel.jpg",
        },
        {
          id: 2,
          address: "7088 N. Wild Rose Ave. Hartford, CT 06106",
          homeowner: "Maurice Sparrow",
          price: 219714,
          photoURL:
            "https://images.adsttc.com/media/images/5e5e/da62/6ee6/7e7b/b200/00e2/medium_jpg/_fi.jpg",
        },
        {
          id: 3,
          address: "52 South Ridge St. Vienna, VA 22180",
          homeowner: "Lucca Benson",
          price: 152639,
          photoURL:
            "https://image.shutterstock.com/image-photo/traditional-english-semidetached-house-260nw-231369511.jpg",
        },
        {
          id: 4,
          address: "7798 Poplar St. Stillwater, MN 55082",
          homeowner: "Adelle Steadman",
          price: 222178,
          photoURL:
            "https://image.shutterstock.com/image-photo/big-custom-made-luxury-house-260nw-374099713.jpg",
        },
        {
          id: 5,
          address: "606 Silver Spear Lane Defiance, OH 43512",
          homeowner: "Haya Pena",
          price: 236163,
          photoURL:
            "https://image.shutterstock.com/image-photo/houses-built-circa-1960-on-260nw-177959672.jpg",
        },
        {
          id: 6,
          address: "9590 8th Lane Seymour, IN 47274",
          homeowner: "Kimora Redfern",
          price: 265730,
          photoURL:
            "https://i.pinimg.com/originals/47/b9/7e/47b97e62ef6f28ea4ae2861e01def86c.jpg",
        },
      ],
    })
  ),
}));

describe("HousesFeed", () => {
  it("renders the HousesGroup component", async () => {
    render(<HousesFeed />);
    const housesGroup = await screen.findByTestId("houses-group");
    expect(housesGroup).not.toBeNull();
    expect(housesGroup.tagName).toBe("DIV");
  });

  it("renders 6 houses when fetchHouses returns 6 items", async () => {
    render(<HousesFeed />);
    const houseItems = await screen.findAllByTestId("house-item");
    expect(houseItems).toHaveLength(6);
  });
});
