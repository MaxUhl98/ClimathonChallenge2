import pandas as pd

def process_input_file(path, feature):
  # read data from file
  df = pd.read_csv(path, sep=',')
  dict = df.to_dict(orient='records')
  
  print(dict)
  # input data -> params for model

  # return params for model