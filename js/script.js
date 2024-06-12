const seriesData = {
    helluvaboss: {
      Season1: [
        { name: 'Pilot', path: 'videos/Season1/HELLUVA_BOSS_PILOT.mp4' },
        { name: 'Murder Family ⧸⧸ S1 Episode 1', path: 'videos/Season1/HELLUVA_BOSS_Murder_Family_S1_Episode_1.mp4' },
        { name: 'Loo Loo Land ⧸⧸ S1 Episode 2', path: 'videos/Season1/HELLUVA BOSS - Loo Loo Land.mp4' },
        { name: 'Spring Broken ⧸⧸ S1 Episode 3', path: 'videos/Season1/HELLUVA BOSS - Spring Broken.mp4' },
        { name: 'C.H.E.R.U.B ⧸⧸ S1 Episode 4', path: 'videos/Season1/HELLUVA BOSS - C.H.E.R.U.B __ S1_ Episode 4.mp4' },
        { name: 'The Harvest Moon Festival ⧸⧸ S1 Episode 5', path: 'videos/Season1/HELLUVA BOSS - The Harvest Moon Festival ⧸⧸ S1： Episode 5.mp4' },
        { name: 'Truth Seekers ⧸⧸ S1 Episode 6', path: 'videos/Season1/HELLUVA BOSS - Truth Seekers ⧸⧸ S1： Episode 6.mp4' },
        { name: `Ozzie's [FINALE] ⧸⧸ S1 Episode 7`, path: `videos/Season1/HELLUVA BOSS - OZZIE'S ⧸⧸ S1： Episode 7 - FINALE.mp4` },
        { name: `Queen Bee ⧸⧸ S1 Episode 8`, path: `videos/Season1/HELLUVA BOSS - QUEEN BEE __ S1_ Episode 8.mp4` }
      ],
      Season2: [
        { name: 'The Circus ⧸⧸ S2： Episode 1', path: 'videos/Season2/HELLUVA BOSS - THE CIRCUS ⧸⧸ S2： Episode 1.mp4' },
        { name: 'Seeing Stars ⧸⧸ S2： Episode 2', path: 'videos/Season2/HELLUVA BOSS - SEEING STARS ⧸⧸ S2： Episode 2.mp4' },
        { name: 'Exes and oohs ⧸⧸ S2： Episode 3', path: 'videos/Season2/HELLUVA BOSS - EXES AND OOHS ⧸⧸ S2： Episode 3.mp4' },
        { name: 'Western Energy ⧸⧸ S2： Episode 4', path: 'videos/Season2/HELLUVA BOSS - WESTERN ENERGY ⧸⧸ S2： Episode 4.mp4' },
        { name: 'Unhappy Campers ⧸⧸ S2： Episode 5', path: 'videos/Season2/HELLUVA BOSS - UNHAPPY CAMPERS ⧸⧸ S2： Episode 5.mp4' },
        { name: 'oops ⧸⧸ S2： Episode 6', path: 'videos/Season2/HELLUVA BOSS - OOPS ⧸⧸ S2： Episode 6.mp4' },
        { name: `MAMMON’S MAGNIFICENT MUSICAL MID-SEASON SPECIAL (ft Fizzarolli) ⧸⧸ S2： Episode 7`, path: `videos/Season2/HELLUVA BOSS - MAMMON’S MAGNIFICENT MUSICAL MID-SEASON SPECIAL (ft Fizzarolli)  ⧸⧸ S2： Episode 7.mp4` },
        { name: 'The full moon ⧸⧸ S2： Episode 8', path: 'videos/Season2/HELLUVA BOSS - THE FULL MOON  ⧸⧸ S2： Episode 8.mp4' }
      ]
    },
    songsausderbohne: [
      { name: 'SONGS aus der BOHNE', path: 'videos/songsausderbohne/SONGS aus der BOHNE I Julien Bam.mp4' },
      { name: 'SONGS aus der BOHNE (TEIL 2)', path: 'videos/songsausderbohne/SONGS aus der BOHNE (TEIL 2) I Julien Bam.mp4' },
      { name: 'SONGS aus der BOHNE (TEIL 3)', path: 'videos/songsausderbohne/SONGS aus der BOHNE (TEIL 3) I Julien Bam.mp4' },
      { name: 'Der letzte SONG AUS DER BOHNE (Akt 1)', path: 'videos/songsausderbohne/Der letzte SONG AUS DER BOHNE (Akt 1) I Julien Bam.mp4' },
      { name: 'Der letzte SONG AUS DER BOHNE (Akt 2)', path: 'videos/songsausderbohne/Der letzte SONG AUS DER BOHNE (Akt 2) I Julien Bam.mp4' },
      { name: 'Der letzte SONG des OSTERHASEN', path: 'videos/songsausderbohne/Der letzte SONG des OSTERHASEN  JULIEN BAM.mp4' },
      { name: 'Der letzte SONG AUS DER BOHNE (Akt 3)', path: 'videos/songsausderbohne/Der letzte SONG AUS DER BOHNE (Akt 3) I Julien Bam.mp4' },
      { name: 'SANTA der BOSS Ein Sturm zieht auf (+Song)', path: 'videos/songsausderbohne/SANTA der BOSS Ein Sturm zieht auf (+Song)  Julien Bam.mp4' },
      { name: 'Der Mann im Mond - Akt 1', path: 'videos/songsausderbohne/Der Mann im Mond - Akt 1 (Songs aus der Bohne) I Julien Bam.mp4' },
      { name: 'Der Mann im Mond - Akt 2', path: 'videos/songsausderbohne/Der Mann im Mond - Akt 2 (Songs aus der Bohne) I Julien Bam.mp4' },
      { name: 'Der Mann im Mond - Akt 3 (Trailer)', path: 'videos/songsausderbohne/Der Mann im Mond - Akt 3 (Trailer)   Julien Bam.mp4' },
      { name: 'Der Mann im Mond - Akt 3', path: 'videos/songsausderbohne/Der Mann im Mond - Akt 3 (Songs aus der Bohne) I Julien Bam.mp4' }
    ]
  };
  
  let currentSeries = null;
  let currentSeason = null;
  let currentEpisodeIndex = 0;
  let videoElement = null;
  let nextButton = null;
  let progressContainer = null;
  
  function showSeries(seriesName) {
    currentSeries = seriesName;
    currentEpisodeIndex = 0;
    
    const seriesContainer = document.getElementById('series-container');
    seriesContainer.style.display = 'flex';
    seriesContainer.innerHTML = '';
    
    const seasonContainer = document.createElement('div');
    seasonContainer.className = 'season-container';
  
    if (seriesName === 'helluvaboss') {
      Object.keys(seriesData[seriesName]).forEach(season => {
        const button = createButton(season, () => loadSeason(season));
        seasonContainer.appendChild(button);
      });
  
      seriesContainer.appendChild(seasonContainer);
      loadSeason(Object.keys(seriesData[seriesName])[0]);
    } else {
      loadSeason('default');
    }
  
    document.querySelector('.thumbnails').style.display = 'none';
  }
  
  function loadSeason(season) {
    currentSeason = season;
    
    const seriesContainer = document.getElementById('series-container');
    const episodeList = document.createElement('div');
    episodeList.className = 'episode-list';
    
    const episodes = currentSeries === 'helluvaboss' ? seriesData[currentSeries][season] : seriesData[currentSeries];
    
    episodes.forEach((episode, index) => {
      const episodeItem = createEpisodeItem(episode.name, () => playEpisode(index));
      episodeList.appendChild(episodeItem);
    });
    
    if (seriesContainer.childNodes.length > 1) {
      seriesContainer.replaceChild(episodeList, seriesContainer.childNodes[1]);
    } else {
      seriesContainer.appendChild(episodeList);
    }
  }
  
  function playEpisode(index) {
    currentEpisodeIndex = index;
    
    const seriesContainer = document.getElementById('series-container');
    seriesContainer.innerHTML = '';
    
    const videoPlayer = document.createElement('div');
    videoPlayer.className = 'video-player';
  
    videoElement = document.createElement('video');
    videoElement.id = 'video';
    videoElement.src = getVideoPath(index);
    videoElement.controls = true;
    videoElement.onended = onVideoEnded;
    videoElement.ontimeupdate = onTimeUpdate;
  
    const episodeName = createEpisodeName(getEpisodeName(index));
  
    nextButton = createButton('Next Episode', playNextEpisode);
    nextButton.id = 'next-button';
    nextButton.style.display = 'none';
    
    progressContainer = document.createElement('div');
    progressContainer.id = 'progress-container';
  
    videoPlayer.appendChild(videoElement);
    videoPlayer.appendChild(episodeName);
    videoPlayer.appendChild(nextButton);
    videoPlayer.appendChild(progressContainer);
    
    seriesContainer.appendChild(videoPlayer);
    videoElement.play();
  
    document.addEventListener('keydown', handleKeyboardControls);
  }
  
  function onTimeUpdate() {
    const timeLeft = videoElement.duration - videoElement.currentTime;
    if (timeLeft <= 60) {
      nextButton.style.display = 'block';
      const fillPercentage = ((60 - timeLeft) / 60) * 100;
      progressContainer.style.width = `${fillPercentage}%`;
    } else {
      nextButton.style.display = 'none';
      progressContainer.style.width = '0%';
    }
  }
  
  function onVideoEnded() {
    playNextEpisode();
  }
  
  function playNextEpisode() {
    const episodes = currentSeries === 'helluvaboss' ? seriesData[currentSeries][currentSeason] : seriesData[currentSeries];
    
    if (currentEpisodeIndex < episodes.length - 1) {
      playEpisode(currentEpisodeIndex + 1);
    } else {
      alert('You have finished the series!');
    }
  }
  
  function handleKeyboardControls(event) {
    switch (event.key) {
      case 'f':
        toggleFullScreen();
        break;
      case 'k':
        togglePlayPause();
        break;
      case 'm':
        toggleMute();
        break;
      case 'ArrowLeft':
        skip(-10);
        break;
      case 'ArrowRight':
        skip(10);
        break;
      case 'ArrowUp':
        changeVolume(0.1);
        break;
      case 'ArrowDown':
        changeVolume(-0.1);
        break;
      case 'Backspace':
        goToStartPage();
        break;
    }
  }
  
  function toggleFullScreen() {
    if (!document.fullscreenElement) {
      videoElement.requestFullscreen().catch(err => {
        alert(`Error attempting to enable full-screen mode: ${err.message} (${err.name})`);
      });
    } else {
      document.exitFullscreen();
    }
  }
  
  function togglePlayPause() {
    videoElement.paused ? videoElement.play() : videoElement.pause();
  }
  
  function skip(time) {
    videoElement.currentTime = Math.max(0, Math.min(videoElement.duration, videoElement.currentTime + time));
  }
  
  function toggleMute() {
    videoElement.muted = !videoElement.muted;
  }
  
  function changeVolume(delta) {
    videoElement.volume = Math.min(1, Math.max(0, videoElement.volume + delta));
  }
  
  function goToStartPage() {
    const seriesContainer = document.getElementById('series-container');
    seriesContainer.innerHTML = '';
  
    document.querySelector('.thumbnails').style.display = 'flex';
  }
  
  function createButton(text, onClick) {
    const button = document.createElement('button');
    button.textContent = text;
    button.onclick = onClick;
    return button;
  }
  
  function createEpisodeItem(text, onClick) {
    const episodeItem = document.createElement('div');
    episodeItem.className = 'episode-item';
    episodeItem.textContent = text;
    episodeItem.onclick = onClick;
    return episodeItem;
  }
  
  function createEpisodeName(text) {
    const episodeName = document.createElement('div');
    episodeName.className = 'episode-title';
    episodeName.textContent = text;
    return episodeName;
  }
  
  function getVideoPath(index) {
    return currentSeries === 'helluvaboss'
      ? seriesData[currentSeries][currentSeason][index].path
      : seriesData[currentSeries][index].path;
  }
  
  function getEpisodeName(index) {
    return currentSeries === 'helluvaboss'
      ? seriesData[currentSeries][currentSeason][index].name
      : seriesData[currentSeries][index].name;
  }

  function searchSeries() {
    const searchInput = document.getElementById('search-input').value.toLowerCase();
    const thumbnails = document.querySelectorAll('.thumbnail');
  
    thumbnails.forEach(thumbnail => {
      const seriesName = thumbnail.querySelector('p').textContent.toLowerCase();
      if (seriesName.includes(searchInput)) {
        thumbnail.style.display = 'block';
      } else {
        thumbnail.style.display = 'none';
      }
    });
  }
  