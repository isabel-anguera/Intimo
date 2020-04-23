const liveStream = document.getElementById('player');
        liveStream.muted = false;

        let file1 = document.getElementById("file1");
        let file2 = document.getElementById("file2");
        let file3 = document.getElementById("file3");
        let file4 = document.getElementById("file4");
        let file5 = document.getElementById("file5");
        let file6 = document.getElementById("file6");
        let file7 = document.getElementById("file7");
        let file8 = document.getElementById("file8");



        function muteAudio() {
          liveStream.muted = true;
          console.log("muted");
        } 

        function unMuteAudio() {
          liveStream.muted = false;
        }

        function playFile1() {
          file1.play();
        }

        function playFile2() {
          file2.play();
        }

        function playFile3() {
          file3.play();
        }

        function playFile4() {
          file4.play();
        }

        function playFile5() {
          file5.play();
        }

        function playFile6() {
          file6.play();
        }

        function playFile7() {
          file7.play();
        }

        function playFile8() {
          file8.play();
        }

        function pauseFile1() {
          file1.pause();
        }

        function pauseFile2() {
          file2.pause();
        }

        function pauseFile3() {
          file3.pause();
        }

        function pauseFile4() {
          file4.pause();
        }

        function pauseFile5() {
          file5.pause();
        }

        function pauseFile6() {
          file6.pause();
        }

        function pauseFile7() {
          file7.pause();
        }

        function pauseFile8() {
          file8.pause();
        }







        