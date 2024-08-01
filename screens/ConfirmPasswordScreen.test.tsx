import * as React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import ConfirmPasswordScreen from "./ConfirmPasswordScreen";
import { NavigationContainer } from "@react-navigation/native";

// Mock navigation object
const navigation = {
  navigate: jest.fn(),
  goBack: jest.fn(),
};

describe("ConfirmPasswordScreen", () => {
  it("shows an error message if passwords do not match", () => {
    const { getByPlaceholderText, getByText } = render(
      <NavigationContainer>
        <ConfirmPasswordScreen navigation={navigation} />
      </NavigationContainer>
    );

    const passwordInput = getByPlaceholderText("Password");
    const confirmPasswordInput = getByPlaceholderText("Confirm Password");
    const signUpButton = getByText("Sign up");

    // Simulate user input
    fireEvent.changeText(passwordInput, "password123");
    fireEvent.changeText(confirmPasswordInput, "differentPassword");
    fireEvent.press(signUpButton);

    // Check if the error message is displayed
    expect(getByText("Passwords do not match")).toBeTruthy();
  });

  it("navigates to HomeScreen if passwords match and are valid", () => {
    const { getByPlaceholderText, getByText } = render(
      <NavigationContainer>
        <ConfirmPasswordScreen navigation={navigation} />
      </NavigationContainer>
    );

    const passwordInput = getByPlaceholderText("Password");
    const confirmPasswordInput = getByPlaceholderText("Confirm Password");
    const signUpButton = getByText("Sign up");

    // Simulate user input
    fireEvent.changeText(passwordInput, "password123");
    fireEvent.changeText(confirmPasswordInput, "password123");
    fireEvent.press(signUpButton);

    // Check if the navigation function was called
    expect(navigation.navigate).toHaveBeenCalledWith("HomeScreen");
  });

  it("shows an error message if the password is less than 6 characters", () => {
    const { getByPlaceholderText, getByText } = render(
      <NavigationContainer>
        <ConfirmPasswordScreen navigation={navigation} />
      </NavigationContainer>
    );

    const passwordInput = getByPlaceholderText("Password");
    const confirmPasswordInput = getByPlaceholderText("Confirm Password");
    const signUpButton = getByText("Sign up");

    // Simulate user input
    fireEvent.changeText(passwordInput, "pass");
    fireEvent.changeText(confirmPasswordInput, "pass");
    fireEvent.press(signUpButton);

    // Check if the error message is displayed
    expect(
      getByText("Password must be at least 6 characters long")
    ).toBeTruthy();
  });
});
