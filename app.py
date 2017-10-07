from flask import Flask, render_template, request, jsonify
from foo import just_do_it
app = Flask(__name__)
    
@app.route("/ona17/")
def homepage():
    html = render_template('index.html')
    return html

@app.route("/ona17/about")
def about():
    html = render_template('about.html')
    return html

@app.route("/ona17/results")
def results():
    reqargs = request.args
    _sortby =  reqargs.get('sortby')
    _title = reqargs.get('title')
    _publication = reqargs.get('publication')
    _interest = reqargs.get('interest')


    if not _title and not _publication and not _interest:
        return """
            <h1>Error</h1>
            <p>Must have either a state abbreviation or zipcode value</p>
            <p>Go <a href="{url}">back</a></p>
        """.format(url=request.referrer)
#A44366

    elif request.args.get('title'):
        search_type = 'title'
        search_val = request.args.get('title')
        app.logger.debug(search_val)
        peeps = just_do_it(title=search_val, sortby=_sortby)
        
        
    elif request.args.get('publication'):
        search_type = 'publication'
        search_val = request.args.get('publication')
        app.logger.debug(search_val)
        peeps = just_do_it(publication=search_val, sortby=_sortby)
        
    elif request.args.get('interest'):
        search_type = 'interest'
        search_val = request.args.get('interest')
        app.logger.debug(search_val)
        peeps = just_do_it(interest=search_val, sortby=_sortby)

    html = render_template('results.html', ona=peeps, sortby=_sortby,
                            search_type=search_type, search_value=search_val)
    return html


if __name__ == '__main__':
    app.run(debug=True, use_reloader=True)
