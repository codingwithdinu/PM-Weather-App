import matplotlib.pyplot as plt
from src.preprocessing import load_data

def plot_data():
    df = load_data()

    plt.plot(df['day'], df['temperature_celsius'])
    plt.title("Temperature Trend")
    plt.xlabel("Day")
    plt.ylabel("Temperature")
    plt.show()