import pandas as pd

def load_data():
    df = pd.read_csv("data/GlobalWeatherRepository.csv")



    # Convert date
    df['last_updated'] = pd.to_datetime(df['last_updated'])



    # Extract day
    df['day'] = df['last_updated'].dt.day



    # Remove missing values
    df = df.dropna()



    # Remove extreme outliers
    df = df[(df['temperature_celsius'] > -10) & (df['temperature_celsius'] < 50)]

    return df