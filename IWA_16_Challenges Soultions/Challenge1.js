// scripts.js

const MONTHS = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ]
  
  const data = {
    response: {
      requestType: "FETCH_ATHLETE_DATA",
      requestBy: "ALL_MATCHING_ATHLETES",
      forDisplay: "BEST_RACES",
  
      data: {
        NM372: {
          firstName: "Nwabisa",
          surname: "Masiko",
          id: "NM372",
          races: [
            {
              date: '2022-11-18T20:00:00.000Z',
              time: [9, 7, 8, 6],
            },
            {
              date: '2022-12-02T20:00:00.000Z',
              time: [6, 7, 8, 7],
            },
          ],
        },
  
        SV782: {
          firstName: "Schalk",
          surname: "Venter",
          id: "SV782",
          races: [
            {
              date: '2022-11-18T20:00:00.000Z',
              time: [10, 8, 3, 12],
            },
            {
              date: '2022-11-25T20:00:00.000Z',
              time: [6, 8, 9, 11],
            },
            {
              date: '2022-12-02T20:00:00.000Z',
              time: [10, 11, 4, 8],
            },
            {
              date: '2022-12-09T20:00:00.000Z',
              time: [9, 8, 9, 11],
            },
          ],
        },
      },
    },
  };
  
  // Only edit below this comment
  // Deconstructing 
  const createHtml = (athleteId) => {
    console.log(athleteId)
    const athlete = data.response.data[athleteId];
    console.log(athlete)
    const { firstName, surname, id, races } = athlete;
    console.log(firstName, surname, id, races)
    const [latestRace] = races.slice(-1);
    console.log(latestRace)
    const { date, time } = latestRace;
    console.log(date, time)
  //-----------------------------//

  // Document Fragment //
    const fragment = document.createDocumentFragment();
    console.log(fragment)
  
    const title = document.createElement('h2');
    title.textContent = id;
    fragment.appendChild(title);
    console.log(title)
  
    const list = document.createElement('dl');
    console.log(list)
  
    // Latest dates 
    const raceDate = new Date(date);
    console.log(raceDate)
    const day = raceDate.getDate();
    console.log(day)
    const month = MONTHS[raceDate.getMonth()];
    console.log(month)
    const year = raceDate.getFullYear();
    console.log(year)
 
 
    // Total time 
    let total = 0;
    total = total + time[0]
    total = total + time[1]
    total = total + time[2]
    total = total + time[3]
    console.log(total)
    const hours = Math.floor(total / 60);
    console.log(hours)
    const minutes = total
    console.log(minutes)
  
    
    console.log(races.length)
    console.log(fragment)
    
    list.innerHTML = /* html */ `
      <dt>Athlete</dt>
      <dd>${firstName} ${surname}</dd>
  
      <dt>Total Races</dt>
      <dd>${races.length}</dd>
  
      <dt>Event Date (Latest)</dt>
      <dd>${day} ${month} ${year}</dd> 
  
      <dt>Total Time (Latest)</dt>
      <dd>${hours.toString().padStart(2, '0')}:${minutes}</dd>
    `;
  
    fragment.appendChild(list);
  
    return fragment;
  };
  
  const athleteElements = document.querySelectorAll('section[data-athlete]');
  athleteElements.forEach((element) => {
    const athleteId = element.getAttribute('data-athlete');
    const athleteHtml = createHtml(athleteId);
    element.appendChild(athleteHtml);
  });
  console.log(athleteElements)
  