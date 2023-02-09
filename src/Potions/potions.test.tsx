import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Potions from "./index";
import "@testing-library/jest-dom";

describe("Potions component", () => {
  it("should render five input fields", () => {
    const setRedPotion = jest.fn();
    const setGreenPotion = jest.fn();
    const setYellowPotion = jest.fn();
    const setGrayPotion = jest.fn();
    const setBluePotion = jest.fn();

    const { getByTestId } = render(
      <Potions
        setRedPotion={setRedPotion}
        setGreenPotion={setGreenPotion}
        setYellowPotion={setYellowPotion}
        setGrayPotion={setGrayPotion}
        setBluePotion={setBluePotion}
      />
    );

    const redPotionInput = getByTestId("red-potion");
    const bluePotionInput = getByTestId("blue-potion");
    const yellowPotionInput = getByTestId("yellow-potion");
    const greenPotionInput = getByTestId("green-potion");
    const grayPotionInput = getByTestId("gray-potion");

    expect(redPotionInput).toBeInTheDocument();
    expect(bluePotionInput).toBeInTheDocument();
    expect(yellowPotionInput).toBeInTheDocument();
    expect(greenPotionInput).toBeInTheDocument();
    expect(grayPotionInput).toBeInTheDocument();
  });

  it("should call the setRedPotion function when the red potion input is changed", () => {
    const setRedPotion = jest.fn();
    const setGreenPotion = jest.fn();
    const setYellowPotion = jest.fn();
    const setGrayPotion = jest.fn();
    const setBluePotion = jest.fn();

    const { getByTestId } = render(
      <Potions
        setRedPotion={setRedPotion}
        setGreenPotion={setGreenPotion}
        setYellowPotion={setYellowPotion}
        setGrayPotion={setGrayPotion}
        setBluePotion={setBluePotion}
      />
    );

    const redPotionInput = getByTestId("red-potion");

    fireEvent.change(redPotionInput, { target: { value: "10" } });

    expect(setRedPotion).toHaveBeenCalledWith(10);
  });

  it("should call the setBluePotion function when the blue potion input is changed", () => {
    const setRedPotion = jest.fn();
    const setGreenPotion = jest.fn();
    const setYellowPotion = jest.fn();
    const setGrayPotion = jest.fn();
    const setBluePotion = jest.fn();

    const { getByTestId } = render(
      <Potions
        setRedPotion={setRedPotion}
        setGreenPotion={setGreenPotion}
        setYellowPotion={setYellowPotion}
        setGrayPotion={setGrayPotion}
        setBluePotion={setBluePotion}
      />
    );

    const setBluePotionInput = getByTestId("blue-potion");

    fireEvent.change(setBluePotionInput, { target: { value: "10" } });

    expect(setBluePotion).toHaveBeenCalledWith(10);
  });

  it("should call the setGreenPotion function when the blue potion input is changed", () => {
    const setRedPotion = jest.fn();
    const setGreenPotion = jest.fn();
    const setYellowPotion = jest.fn();
    const setGrayPotion = jest.fn();
    const setBluePotion = jest.fn();

    const { getByTestId } = render(
      <Potions
        setRedPotion={setRedPotion}
        setGreenPotion={setGreenPotion}
        setYellowPotion={setYellowPotion}
        setGrayPotion={setGrayPotion}
        setBluePotion={setBluePotion}
      />
    );

    const setGreenPotionInput = getByTestId("green-potion");

    fireEvent.change(setGreenPotionInput, { target: { value: "10" } });

    expect(setGreenPotion).toHaveBeenCalledWith(10);
  });

  it("should call the setYellowPotion function when the blue potion input is changed", () => {
    const setRedPotion = jest.fn();
    const setGreenPotion = jest.fn();
    const setYellowPotion = jest.fn();
    const setGrayPotion = jest.fn();
    const setBluePotion = jest.fn();

    const { getByTestId } = render(
      <Potions
        setRedPotion={setRedPotion}
        setGreenPotion={setGreenPotion}
        setYellowPotion={setYellowPotion}
        setGrayPotion={setGrayPotion}
        setBluePotion={setBluePotion}
      />
    );

    const setYellowPotionInput = getByTestId("yellow-potion");

    fireEvent.change(setYellowPotionInput, { target: { value: "10" } });

    expect(setYellowPotion).toHaveBeenCalledWith(10);
  });

  it("should call the setGrayPotion function when the blue potion input is changed", () => {
    const setRedPotion = jest.fn();
    const setGreenPotion = jest.fn();
    const setYellowPotion = jest.fn();
    const setGrayPotion = jest.fn();
    const setBluePotion = jest.fn();

    const { getByTestId } = render(
      <Potions
        setRedPotion={setRedPotion}
        setGreenPotion={setGreenPotion}
        setYellowPotion={setYellowPotion}
        setGrayPotion={setGrayPotion}
        setBluePotion={setBluePotion}
      />
    );

    const setGrayPotionInput = getByTestId("gray-potion");

    fireEvent.change(setGrayPotionInput, { target: { value: "10" } });

    expect(setGrayPotion).toHaveBeenCalledWith(10);
  });
});
