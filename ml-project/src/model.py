import pandas as pd
from sklearn.linear_model import LinearRegression
from sklearn.ensemble import RandomForestRegressor
from sklearn.metrics import mean_absolute_error
from src.preprocessing import load_data

def train_models():
    df = load_data()

    X = df[['day']]
    y = df['temperature_celsius']




    # Split data
    split = int(0.8 * len(df))
    X_train, X_test = X[:split], X[split:]
    y_train, y_test = y[:split], y[split:]




    # Model 1: Linear Regression
    lr = LinearRegression()
    lr.fit(X_train, y_train)
    lr_pred = lr.predict(X_test)
    lr_error = mean_absolute_error(y_test, lr_pred)





    # Model 2: Random Forest
    rf = RandomForestRegressor()
    rf.fit(X_train, y_train)
    rf_pred = rf.predict(X_test)
    rf_error = mean_absolute_error(y_test, rf_pred)

    print("Linear Regression Error:", lr_error)
    print("Random Forest Error:", rf_error)




    # Choose best model
    if rf_error < lr_error:
        print("Best Model: Random Forest")
        return rf
    else:
        print("Best Model: Linear Regression")
        return lr



def predict():
    model = train_models()

    future_day = pd.DataFrame([[30]], columns=['day'])
    pred = model.predict(future_day)

    print("Predicted Temperature:", pred)