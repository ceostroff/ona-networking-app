from operator import itemgetter
import csv
LEGS_FNAME = './static/data/ona.clean.csv'

def get_journalists():
    
    with open(LEGS_FNAME, 'r') as f:
        newrows = []
        for row in csv.DictReader(f):
            newrows.append(row)
        return newrows

def filter_by_title(title, datarows):
    matches = []
    for c in datarows:
       
        if title == c['title']: 
            matches.append(c)
    return matches

def filter_by_publication(publication, datarows):
    matches = []
    for c in datarows:
        
        if publication == c['publication']: 
            matches.append(c)
    return matches

def filter_by_interest(interest, datarows):
    matches = []
    for c in datarows:

        if interest == c['interest']: 
            matches.append(c)
    return matches

def sort_by_criteria(criteria, datarows):
    rows = sorted(datarows, key=itemgetter('fullname'))
    return rows