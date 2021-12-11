This is your Take-Home interview. This should take only a few hours at most.

Kopo Kopo lends money to its customers who are mostly businesses. We use past Lipa na M-PESA transactions received by
these customers to score them. This score helps us to find out which customers have the highest likelihood of repaying
their loans. We have noticed that businesses who consistently receive payments, even if its in small amounts tend to
eventually complete paying their loans. We like lending to these businesses. Your task is to identify these businesses given a set of transaction data.

Write a program with a method/function that takes two arguments, you can name the arguments whatever you want. We'll refer to them here
as transactions_csv_file_path and n.

transactions_csv_file_path is a string indicating the location of a csv file containing transaction data.

The csv files will contain 3 columns namely;
  1. Customer ID
  2. Transaction Amount
  3. Transaction Date
We have included 3 csv files in the directory named test_data to help you write and validate your solution.

The second argument is n which is an integer. Your method should return the customer IDs of the best n customers from
the transaction data. The ID's should be returned in the following format ['ID 1', 'ID 2', 'ID 3']. 
We define the best customer as the one with the longest period of consecutive daily payments.
The second best is the one with the second longest period and so on and so forth.

Solution rules:
1. We define consecutive daily payments as at least 1 transaction per calendar day.
2. If there are any ties, use ascending order to break ties. For example K20003 comes before K20005.

Testing your solution:
To help you validate your solution, use the following test cases:

Input:
  - transactions_csv_file_path: 'transaction_data_1.csv'
  - n: 1
Expected output:
  - ['K20008']

Input:
  - transactions_csv_file_path: 'transaction_data_2.csv'
  - n: 3
Expected output:
  - ['K20987', 'K20008', 'K20233']

Input:
  - transactions_csv_file_path: 'transaction_data_3.csv'
  - n: 5
Expected output:
  - [ 'K20002', 'K20005', 'K20377', 'K20987', 'K22584']

Notes:

- You can use whatever programming language or tools you like for your solution. 

- Send us your solution as a git repo, tarball, or zip file. 

- Send your solution to recruiting@kopokopo.com with the subject line "Junior Software Engineer Coding Test - [Your name]"

- Make sure you include clear instructions in a README file on how to run your solution. 

- Your solution will be graded on different sets of data so it should also run on data that has not been included.


The rest is up to you! Feel free to be creative once you have an initial solution. Wow us!



