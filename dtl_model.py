import joblib
import pandas as pd
import numpy as np
from sklearn.model_selection import train_test_split
from sklearn import tree
from sklearn.tree import DecisionTreeClassifier
from sklearn.tree import export_text
from sklearn.preprocessing import LabelEncoder
# Import metrics untuk pengukuran performa model
from sklearn.metrics import accuracy_score
from sklearn.metrics import f1_score


# Read the dataset
df = pd.read_csv('indeks-standar-pencemar-udara-di-spku-bulan-januari-tahun-2020.csv')

# Cleanse the data : Eliminate null values and replace them with AVG value

# Replace invalid value "---" with NaN
df = df.replace('---',np.nan)
df['pm10'] = df['pm10'].astype(float)
df['so2'] = df['so2'].astype(float)
df['co'] = df['co'].astype(float)
df['o3'] = df['o3'].astype(float)
df['no2'] = df['no2'].astype(float)

# Find AVG for feature data
avg_pm10 = df['pm10'].mean(skipna=True)
avg_so2 = df['so2'].mean(skipna=True)
avg_co = df['co'].mean(skipna=True)
avg_o3 = df['o3'].mean(skipna=True)
avg_no2 = df['no2'].mean(skipna=True)

print(avg_pm10)
print(avg_so2)
print(avg_co)
print(avg_o3)
print(avg_no2)

# Replace NaN value with corresponding feature AVG
df['pm10'] = df['pm10'].replace(np.nan, avg_pm10)
df['so2'] = df['so2'].replace(np.nan, avg_so2)
df['co'] = df['co'].replace(np.nan, avg_co)
df['o3'] = df['o3'].replace(np.nan, avg_o3)
df['no2'] = df['no2'].replace(np.nan, avg_no2)


# Splitting the Data for TRAINING and TESTING purpose
# Test size ratio
# 80% data training dan 20% data testing
TEST_SIZE_RATIO = 0.2

# Feature names
df_featureNames = df.columns[2:7]

# Feature data
df_x = df.iloc[:, 2:7]

# Target data
df_y = df.iloc[:, 9]

# Split the data using Scikit-Learn's train_test_split
df_x_train, df_x_test, df_y_train, df_y_test = train_test_split(df_x, df_y, test_size=TEST_SIZE_RATIO, random_state=12)



# Generating a Decision Tree Classifier model
clf = DecisionTreeClassifier().fit(df_x_train, df_y_train)
dtl_export = export_text(clf, feature_names=df_featureNames.tolist())


# Test and evaluation to generated model
data_y_prediction = clf.predict(df_x_test)

# Test Dataset
print("Accuracy Score Data Test : ", accuracy_score(df_y_test, data_y_prediction))
print("F1 Score Data Test : ", f1_score(df_y_test, data_y_prediction, average='macro'))


inputDataFrame = pd.DataFrame([[30,20,10,32,9]], columns=df_featureNames.tolist())
result = clf.predict(inputDataFrame)
print(result)


joblib.dump(clf, 'classifier.pkl')
