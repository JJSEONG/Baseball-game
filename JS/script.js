;(() =>  {
  'use strict'

  // document.querySelector 를 변수로 선언하여 get을 사용하여 DOM을 불러오기 위한 변수
  const get = () => document.querySelector(target)

  // 시작을 알리는 init을 변수로 지정하여 playGame 함수와 setHomerun 함수를 실행한다.
  const init = () => {
    get('form').addEventListener('submit', (event) => {
      playGame(event)
    })
    setHomerun()
  }

  const baseball = {
    limit: 10,
    digit: 4,
    trial: 0,
    end: false,
    $question: get('.ball_question'),
    $answer: get('ball_answer'),
    $input: get('ball_input'),
  }

  const setHomerun = () => {
    // 4자리 숫자를 모두 맞추었을 때
  }

  const onPlayed = () => {
    // 시도를 했을 때
  }

  const isCorrect = () => {
    // 번호가 같은지 확인
  }

  const isDuplicate = () => {
    // 중복되는 번호가 있는지 확인
  }

  const getStrikes = () => {
    // 스트라이크 카운트는 몇개인지 확인
  }

  const getBalls = () => {
    // 볼 카운트 몇개인지 확인
  }

  const getResult = () => {
    // 시도에 따른 결과 확인
  }

  const playGame = () => {
    // 게임 플레이
  }

  init()
}) ()