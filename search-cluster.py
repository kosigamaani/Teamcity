from sklearn.datasets import fetch_20newsgroups
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.cluster import KMeans
from nltk.tokenize import word_tokenize
import pandas as pd
from sklearn import metrics
import matplotlib.pyplot as plt
from sklearn.externals import joblib
import sys
from sklearn.decomposition import TruncatedSVD
from sklearn.preprocessing import Normalizer
from sklearn.pipeline import make_pipeline
from PIL import Image
from sklearn.decomposition import PCA
from sklearn.pipeline import Pipeline


categories = [
    'alt.atheism',
    'sci.space',
]

def tokenize_doc(newsletter):
    news = ''
    doc_arr = word_tokenize(newsletter)
    for word in doc_arr:
        if word.isalpha():
            news = news + ' ' + word.lower()
    return news

dataset = fetch_20newsgroups(subset='all', categories=categories,
                             shuffle=True, random_state=42, remove=('headers', 'footers', 'quotes'))

data = []
doc_dict = {}

data = dataset.data
filename = 'finalized_model.sav'
cluster_range = 200

def train_cluster_model():
    docid = 0
    global X
    for doc in data:
        doc_dict[docid] = tokenize_doc(doc)
        docid += 1
    # print(doc_dict), columns=['docid', 'desc']
    df = pd.DataFrame.from_dict(doc_dict, orient='index')
    df['docid'] = df.index.values
    df.columns = ['desc', 'docid']
    print(df.head())
    km_n_clusters = 10
    vectorizer = TfidfVectorizer(stop_words='english', ngram_range=(1, 3))
    X = vectorizer.fit_transform(df['desc'])
    print(X.shape)
    if len(sys.argv) > 1:
        if sys.argv[1] == 'reload':
            create_model(X, km_n_clusters)

    predict_scatter_plot(X)


def create_model(X, km_n_clusters):
    global km
    km = KMeans(n_clusters=km_n_clusters, init='k-means++', max_iter=1000)
    km.fit(X)
    joblib.dump(km, filename)


def predict_scatter_plot(X):
    trained_model = joblib.load(filename)
    #y_kmeans = trained_model.predict(X)
    svd = TruncatedSVD(n_components=2)
    normalizer = Normalizer(copy=False)
    lsa = make_pipeline(svd, normalizer)
    pca = PCA(n_components=2).fit(X.todense())
    data2D = pca.transform(X)
    plt.scatter(data2D[:, 0], data2D[:, 1], c=data.target)
    plt.show()
    X = lsa.fit_transform(X)
    print(X.shape)
    plt.scatter(X[:, 0], X[:, 1], s=200, alpha=0.5, cmap='viridis')

    # plt.savefig('testplot.png')
    # Image.open('testplot.png').save('testplot.jpg', 'JPEG')
    #
    centers = trained_model.cluster_centers_
    plt.scatter(centers[:, 0], centers[:, 1], c='black', s=200, alpha=0.5);

    plt.show()



#print(vectorizer.get_feature_names())



def elbow_iteration():
    global km
    for k in range(cluster_range):
        try:
            km = KMeans(n_clusters=k, init='k-means++', max_iter=1000)
            km.fit(X)
            print("Silhouette Coefficient for " + str(k) + " : %0.3f"
                  % metrics.silhouette_score(X, km.labels_, sample_size=1000))
        except Exception as e:
            print(e)


train_cluster_model()

#elbow_iteration()
