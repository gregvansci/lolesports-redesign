import mwclient
import json

site = mwclient.Site('lol.fandom.com', path='/')
def get_region_past_games(region):
    response = site.api('cargoquery',
        limit="max",
        tables="MatchSchedule=MS",
        fields="MS.MatchId, MS.Team1, MS.Team1Score, MS.Team2, MS.Team2Score, MS.BestOf, MS.DateTime_UTC",
        where="MS.MatchId LIKE '" + region + "/%' AND MS.DateTime_UTC < NOW() AND MS.DateTime_UTC > '2023-01-01 00:00:00'",
        order_by="MS.DateTime_UTC DESC",
    )
    return response['cargoquery']

region = "lck"
response = get_region_past_games(region.upper())
matches = []

for match in response:
    team1 = match['title']['Team1']
    team1_score = match['title']['Team1Score'] or 0
    team2 = match['title']['Team2']
    team2_score = match['title']['Team2Score'] or 0
    match_date = match['title']['DateTime UTC']
    best_of = int(match['title']['BestOf'])
    regionInfo = match['title']['MatchId'].split('/')[2].split("_")[0].split(" ");

    # convert match_date to javascript date object format
    match_date = match_date.replace(" ", "T") + "Z"


    # create a dictionary for the match data
    match_data = {
        "matchId": match['title']['MatchId'],
        "matchDate": match_date,
        "team1": team1,
        "team1Score": int(team1_score),
        "team2": team2,
        "team2Score": int(team2_score),
        "region": region.upper(),
        "season": regionInfo[0],
        "stage": regionInfo[1],
        "bestOf": best_of
    }
    matches.append(match_data)

filename='./src/lib/data/' + region + '.json'
try:
    with open(filename, 'x') as f:
        f.write('{}')
except FileExistsError:
    pass

with open(filename, 'r') as f:
    data = json.load(f)

data['past'] = matches

with open(filename, 'w') as f:
    json.dump(data, f, indent=4)

    