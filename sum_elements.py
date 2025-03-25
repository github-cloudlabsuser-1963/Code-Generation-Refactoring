MAX = 100

def calculate_sum(arr):
    """Calculates the sum of a list of integers."""
    return sum(arr)

def get_number_of_elements():
    """Prompts the user to enter the number of elements and validates the input."""
    while True:
        try:
            n = int(input(f"Enter the number of elements (1-{MAX}): "))
            if 1 <= n <= MAX:
                return n
            else:
                print(f"Invalid input. Please enter a number between 1 and {MAX}.")
        except ValueError:
            print("Invalid input. Please enter a valid integer.")

def get_elements(n):
    """Prompts the user to enter `n` integers and validates each input."""
    arr = []
    print(f"Enter {n} integers:")
    for i in range(n):
        while True:
            try:
                num = int(input(f"Element {i + 1}: "))
                arr.append(num)
                break
            except ValueError:
                print("Invalid input. Please enter a valid integer.")
    return arr

def main():
    """Main function to execute the program."""
    try:
        n = get_number_of_elements()
        arr = get_elements(n)
        total = calculate_sum(arr)
        print("Sum of the numbers:", total)
    except KeyboardInterrupt:
        print("\nProgram terminated by user.")

if __name__ == "__main__":
    main()
