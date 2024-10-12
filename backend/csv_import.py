import pandas as pd
from datetime import datetime

# Specify the chunk size (number of rows per chunk)
chunksize = 10000  # Adjust this value based on your memory constraints

# File name of CSV file to read
csv_filename = '../data/meteo_daily_2000-2002.csv'


def read_csv_data(station, start_date, end_date):
  processed_data = []

  # Iterate over the file in chunks
  for chunk in pd.read_csv(csv_filename, chunksize=chunksize):
      # Process each chunk here
      # For example, you can perform data cleaning, filtering, aggregation, etc.
      
      # Example: Filter rows where a certain condition is met
      filtered_chunk = chunk[chunk['station'] == station]
      filtered_chunk = chunk
      filtered_chunk['Date'] = pd.to_datetime(chunk['Date'], format='%Y%m%d')
  
      # Reshape the DataFrame from wide to long format
      df_long = filtered_chunk.melt(id_vars='Date', var_name='Hour', value_name='Value')
  
      # Convert 'Hour' column to integers
      df_long['Hour'] = df_long['Hour'].astype(int)

      # Combine 'Date' and 'Hour' into a 'Datetime' column
      df_long['Datetime'] = df_long.apply(lambda row: row['Date'] + pd.Timedelta(hours=row['Hour']), axis=1)

      # Filter the data
      mask = (df_long['Datetime'] >= start_date) & (df_long['Datetime'] <= end_date)
      filtered_df = df_long.loc[mask]

      # Append the processed chunk to the list
      processed_data.append(filtered_df)

  # Concatenate all processed chunks into a single DataFrame (if needed)
  result_df = pd.concat(processed_data)

  return result_df.to_dict(orient='records')


# def read_csv_data():
#     df = pd.read_csv(csv_filename)
#     return df.to_dict(orient='records')