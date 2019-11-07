# sudoku-nodejs
A NodeJS Application for Sudoku, the well-known logic &amp; mathematics based puzzle game.

---

## Algorithm:
This Application uses the Backtracking algorithm to generate a solved Sudoku Board.  
Backtacking algorithm solves a problem recursively, by solving each part of the problem incremently until the full problem is solved.

To generate a solved Sudoku Board, we give the program an empty board and ask it to solve it using the algorithm.  
The following logic is implemented:

1. Generate empty 9x9 board
2. Search to find next empty location in board. If location is not found, then board is SOLVED.
3. Generate new number between 1 to 9
4. Validate number before inserting in found location
  a. Check validity by row to insert in location
  b. Check validity by col to insert in location
  c. Check validity by 3x3 grid (respective to that location) to insert in location
  d. If all validations successful, insert item into board. Else loop back to step 3.
5. Repeat step 2 recursively, until all locations filled
6. Board is SOLVED.


## Unit Testing:
The unit testing for this application was done with Jasmine, and the whole application is designed to follow a Test Driven Development approach. All functions carried out to generate the sudoku board have their own tests.

## Build Application:
To build the application,  
1. Download the solution
2. Open command prompt (Windows) or terminal (Mac or Linux) in the project root
3. Run the following command: `npm run build`
4. The project automatically runs all tests, and builds the application.

## Note:
By default the application is hosted on localhost:3000  
To run the application on a desired port, run the following command to change default port:

```
Mac/Linux:  
In Terminal: export PORT=1234

Windows:  
In Command Prompt: set PORT=1234  
In Powershell: $env:PORT = 1234
```
