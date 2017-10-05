from helpers import get_journalists
from helpers import filter_by_state, filter_by_publication, filter_by_interest, sort_by_criteria

ona = get_journalists()

def just_do_it(state="", publication="", interest="", sortby="alpha"):
    matched_rows = []
    datarows = ona
    if state:
        filteredrows = filter_by_state(state, ona)
    elif publication:
        filteredrows = filter_by_publication(publication, ona)
    elif interest:
        filteredrows = filter_by_interest(interest, ona)
    else:
        print("Error")
        
    # then, sort and return the result
    # remember to pass in filteredrows, not legislators
    return sort_by_criteria(sortby, filteredrows)



def print_record_count():
    print("There are", len(ona), 'rows.')