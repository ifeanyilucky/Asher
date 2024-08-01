import * as React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import CreateAccountScreen from "./CreateAccountScreen";
import { NavigationContainer } from "@react-navigation/native";

// Mock object
const navigation = {
  navigate: jest.fn(),
  goBack: jest.fn(),
};

describe("CreateAccountScreen", () => {
  it("shows an error message if email is not provided", () => {
    const { getByText, getByPlaceholderText } = render(
      <NavigationContainer>
        <CreateAccountScreen navigation={navigation} />
      </NavigationContainer>
    );

    const nextButton = getByText("Next");

    // Simulate pressing the "Next" button without entering an email
    fireEvent.press(nextButton);

    // Check if the error message is displayed
    expect(getByText("Email is required.")).toBeTruthy();
  });

  it("shows an error message if email is invalid", () => {
    const { getByText, getByPlaceholderText } = render(
      <NavigationContainer>
        <CreateAccountScreen navigation={navigation} />
      </NavigationContainer>
    );

    const emailInput = getByPlaceholderText(
      "Registered email address/Tenant ID"
    );
    const nextButton = getByText("Next");

    // Simulate user input
    fireEvent.changeText(emailInput, "invalid-email");
    fireEvent.press(nextButton);

    // Check if the error message is displayed
    expect(getByText("Email is invalid.")).toBeTruthy();
  });

  it("navigates to ConfirmPassword if email is valid", () => {
    const { getByText, getByPlaceholderText } = render(
      <NavigationContainer>
        <CreateAccountScreen navigation={navigation} />
      </NavigationContainer>
    );

    const emailInput = getByPlaceholderText(
      "Registered email address/Tenant ID"
    );
    const nextButton = getByText("Next");

    // Simulate user input
    fireEvent.changeText(emailInput, "valid@example.com");
    fireEvent.press(nextButton);

    // Check if the navigation function was called with the expected argument
    expect(navigation.navigate).toHaveBeenCalledWith("ConfirmPassword");
  });

  it("goes back when the back button is pressed", () => {
    const { getByTestId } = render(
      <NavigationContainer>
        <CreateAccountScreen navigation={navigation} />
      </NavigationContainer>
    );

    const backButton = getByTestId("back-button");

    // Simulate pressing the back button
    fireEvent.press(backButton);

    // Check if the goBack function was called
    expect(navigation.goBack).toHaveBeenCalled();
  });
});
