from operator import itemgetter
from flask import jsonify
import csv
LEGS_FNAME = './static/data/ona.csv'

def get_journalists():
    # open data file, filter for in_office,
    # add fullname field
    # then return list of dicts
    with open(LEGS_FNAME, 'r') as f:
        newrows = []
        for row in csv.DictReader(f):
            newrows.append(row)
        return newrows

def filter_by_state(state, datarows):
    matches = []
    for c in datarows:
        # find all house members
        # that match given z['district'] and z['state']
        if state.upper() == c['state']: # upcase the state, so that `ca` resolves to `CA`
            matches.append(c)
    return matches

def filter_by_publication(publication, datarows):
    matches = []
    for c in datarows:
        # find all house members
        # that match given z['district'] and z['state']
        if publication == c['publication']: # upcase the state, so that `ca` resolves to `CA`
            matches.append(c)
    return matches

def filter_by_interest(interest, datarows):
    matches = []
    for c in datarows:
        # find all house members
        # that match given z['district'] and z['state']
        if interest == c['interest']: # upcase the state, so that `ca` resolves to `CA`
            matches.append(c)
    return matches

def sort_by_criteria(criteria, datarows):
        # i.e. 'alpha' or any value...just sort by last name, first name
    rows = sorted(datarows, key=itemgetter('fullname'))
    return rows