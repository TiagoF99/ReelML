import pandas as pd
import urllib.request
from urllib.error import HTTPError
import csv


pd.set_option('display.max_columns', None)
df = pd.read_csv("movie.csv")

df.drop(labels=["actor_3_facebook_likes", "actor_2_name", "actor_1_facebook_likes", "actor_1_name", "num_voted_users",
                "cast_total_facebook_likes", "actor_3_name", "facenumber_in_poster", "movie_imdb_link",
                "num_user_for_reviews", "actor_2_facebook_likes", "aspect_ratio", "color", "num_critic_for_reviews",
                "director_facebook_likes"], axis=1, inplace=True)
df.dropna(subset=["gross"], axis=0, inplace=True)
print(df.columns)
print(df.head())