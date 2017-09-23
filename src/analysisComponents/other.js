//Basic function to return list of the most used words in an article
  wordCount =() => {
    let raw = 'Money isn’t the most important thing in the world. Your time is. the most important thing in the world. Your time is.';
    let ignore = ['a', 'the', 'it', 'we', 'I', 'you', 'your', 'its', 'from', 'for', 'as', 'an', 'is', 'in',]
    let positive = ['good','great', 'nice', 'wonderful', 'terrific', 'superlative','sensational', 'fantastic' ];
    let negative = ['bad', 'terrible', 'awful', 'disappointing', 'horrible'];
    let raw1 = raw.toLowerCase().split(' ');
    let res = {};
    let res1 = [];
      for (let i=0; i<raw1.length; i++) {
          if (res[raw1[i]]) res[raw1[i]] ++;
          else {
            if (ignore.indexOf(raw1[i]) === -1) res[raw1[i]] = 1;
          }
        }
      for (var key in res) {
        res1.push(
          <div>{key} : {res[key]}</div>
        )
      }
      console.log('RES1', res1);
      return res1;
    }


    sentenceSentiment = () => {
      let raw = 'Money isn’t the most important thing in the world. Your time is good. Nice, terrific, awful';
      let ignore = ['a', 'the', 'it', 'we', 'I', 'you', 'your', 'its', 'from', 'for', 'as', 'an', 'is', 'in',];
      let positive = ['good','great', 'nice', 'wonderful', 'terrific', 'superlative','sensational', 'fantastic' ];
      let negative = ['bad', 'terrible', 'awful', 'disappointing', 'horrible'];
      let positivePhrase = [];
      let negativePhrase = [];
      let raw1 = raw.toLowerCase().split(' ');
      for (var k = 0; k < raw1.length; k++) {
        if (positive.indexOf(raw1[k]) !==-1) positivePhrase.push(raw1[k] + ' ' + raw1[k+1]);
        if (negative.indexOf(raw1[k]) !==-1) negativePhrase.push(raw1[k] + ' ' + raw1[k+1]);
      }
      return <div>positivePhrase</div>;
    }



    sentiment = () => {
      let raw = 'Money isn’t the most important thing in the world. Your time is good or bad. terrific , wonderful.';
      let ignore = ['a', 'the', 'it', 'we', 'I', 'you', 'your', 'its', 'from', 'for', 'as', 'an', 'is', 'in',]
      let positive = ['good','great', 'nice', 'wonderful', 'terrific', 'superlative','sensational', 'fantastic' ];
      let negative = ['bad', 'terrible', 'awful', 'disappointing', 'horrible'];
        let raw1 = raw.toLowerCase().split(' ');
        let negativeCount = 0;
        let positiveCount = 0;
        for (let j = 0; j < raw1.length ; j++) {
          if (positive.indexOf(raw1[j]) !== -1) positiveCount ++;
          if (negative.indexOf(raw1[j]) !== -1) negativeCount ++;
        }
        return <div>{positiveCount-negativeCount}</div>;
      }
