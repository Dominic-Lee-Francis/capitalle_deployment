import "./Rules.css";

const Rules = () => {
  return (
    <div className="rules">
      <h1 className="rulesTitle">Rules</h1>
      <div className="rulesText">
        <h3 className="rulesDescription">
          Welcome to Capital Challenge, where you can test your knowledge of
          world capitals in an engaging and fun way! Below are the rules of the
          game:
        </h3>
        <ul className="rulesList">
          <li className="rulesListItems">
            Daily Challenge: Each day, you will be presented with a new country.
            Your task is to correctly guess the capital city of that country.
          </li>
          <li className="rulesListItems">
            Guessing the Capital: Type your guess into the provided text box and
            submit it. If your guess is correct, well done! If your guess is
            incorrect, don't worry - you can try again the next day!
          </li>
          <li className="rulesListItems">
            Hints: If you're unsure about the capital of a country, you can use
            hints to assist you. Every incorrect guess provides a hint that may
            include information such as the first letter of the capital, or
            other more unique facts.
          </li>
          <li className="rulesListItems">
            Country Facts: After guessing the capital correctly, you'll have the
            opportunity to learn interesting facts about the country, including
            its history, culture, and landmarks.
          </li>
          <li className="rulesListItems">
            <span className="comingSoon">Coming Soon: </span>Scoring and
            Leaderboard: Earn points for each correct guess and compete with
            friends and other players on the leaderboard. Aim for the top spot
            by achieving the highest score and the longest streak of consecutive
            correct guesses.
          </li>
          <li className="rulesListItems">
            <span className="comingSoon">Coming Soon: </span>Social Sharing:
            Share your daily challenge scores and achievements with friends on
            social media. Invite them to join the fun and see who can guess the
            most capitals correctly!
          </li>
          <li className="rulesListItems">
            <span className="comingSoon">Coming Soon: </span>Streak Tracker:
            Keep track of your consecutive correct guesses and aim to build the
            longest streak. Can you maintain your streak and become a Capital
            Challenge champion?
          </li>
          <li className="rulesListItems">
            Have Fun: Above all, have fun while expanding your knowledge of
            world capitals! Whether you're a geography enthusiast or just
            looking for a fun daily activity, Capital Challenge offers an
            entertaining and educational experience for all players.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Rules;
