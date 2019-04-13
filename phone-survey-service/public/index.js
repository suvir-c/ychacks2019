$(() => {
  // Chart ages
  function ages(results) {
    // Collect age results
    const data = {};
    for (let i = 0, l = results.length; i < l; i++) {
      const ageResponse = results[i].responses[0];
      var k = String(ageResponse.answer);
      if (!data[k]) data[k] = 1;
      else data[k]++;
    }

    // Assemble for graph
    const labels = Object.keys(data);
    const dataSet = [];
    for (var k in data) dataSet.push(data[k]);

    // Render chart
    const ctx = document.getElementById('ageChart').getContext('2d');
    const ageChart = new Chart(ctx).Bar({
      labels,
      datasets: [
        {
          label: 'Ages',
          data: dataSet,
        },
      ],
    });
  }

  // Chart yes/no responses to lemur question
  function lemurs(results) {
    // Collect lemur kicking results
    let yes = 0;
    let no = 0;
    for (let i = 0, l = results.length; i < l; i++) {
      const lemurResponse = results[i].responses[1];
      lemurResponse.answer ? yes++ : no++;
    }

    const ctx = document.getElementById('lemurChart').getContext('2d');
    const ageChart = new Chart(ctx).Pie([
      { value: yes, label: 'Yes', color: 'green', highlight: 'gray' },
      { value: no, label: 'No', color: 'red', highlight: 'gray' },
    ]);
  }

  // poor man's html template for a response table row
  function row(response) {
    let tpl = '<tr><td>';
    tpl += response.answer || 'pending...' + '</td>';
    if (response.recordingUrl) {
      tpl += `<td><a target="_blank" href="${
        response.recordingUrl
      }"><i class="fa fa-play"></i></a></td>`;
    } else {
      tpl += '<td>N/A</td>';
    }
    tpl += '</tr>';
    return tpl;
  }

  // add text responses to a table
  function freeText(results) {
    const $responses = $('#turtleResponses');
    let content = '';
    for (let i = 0, l = results.length; i < l; i++) {
      const turtleResponse = results[i].responses[2];
      content += row(turtleResponse);
    }
    $responses.append(content);
  }

  // Load current results from server
  $.ajax({
    url: '/results',
    method: 'GET',
  })
    .done(data => {
      // Update charts and tables
      $('#total').html(data.results.length);
      lemurs(data.results);
      ages(data.results);
      freeText(data.results);
    })
    .fail(err => {
      console.log(err);
      alert('failed to load results data :(');
    });
});
