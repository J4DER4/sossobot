# Sossobot

A Telegram bot that provides quotes from sosso.fi and has some other fun commands.

## Prerequisites

*   [Node.js](https://nodejs.org/) (v14 or higher recommended)
*   [npm](https://www.npmjs.com/) (usually comes with Node.js)
*   A Telegram Bot Token (get one from the [BotFather](https://t.me/botfather))

## Setup and Running

1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    cd sossobot
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Set up your environment variables:**
    Create a file named `.env` in the root of the project and add the following, replacing the placeholder values with your own:
    ```
    BOT_TOKEN=your_telegram_bot_token
    OVERLORDID=your_telegram_user_id
    OVERLORDID2=another_telegram_user_id
    SIKID=a_telegram_chat_id
    TESTID=a_telegram_chat_id
    ```
    *   `BOT_TOKEN`: Your Telegram bot token from BotFather.
    *   `OVERLORDID`, `OVERLORDID2`: Your Telegram user ID(s) to grant admin privileges for the bot. You can get your ID from a bot like [@userinfobot](https://t.me/userinfobot).
    *   `SIKID`, `TESTID`: Telegram chat IDs for specific commands.

4.  **Start the bot:**
    ```bash
    npm start
    ```

## Available Commands

### Public Commands
*   `/moi`: Greets the user.
*   `/sammakko`: Gets a random quote from Sössö's *sammakkopalsta*. **Note:** This command only works on Fridays.
*   `/sammakko <keyword>`: Searches for a quote containing the given keyword.
*   `/joulukalenteri`: Fetches the daily picture and text from Sössö's advent calendar.
*   `/eiku`: Sends the classic "eiku" image.
*   `/onema`: Sends the classic "onema" image.
*   `/vittu`: Offers encouragement.
*   `/mita_sahko_tekee`: Sähkö jakaa!
*   `/ok`: A classic copypasta response.
*   `/jappadaida`: Hyvä KIK!
*   `/ez4sik`: Links to the Haalarz track.
*   `/perjantai`: Links to a relevant site for Friday.
*   `/lavan_oikee_puoli` (and variations): A counter that posts an image every 7th command use.

### Admin Commands
These commands can only be used by the `OVERLORDID` users.
*   `/overlord_start`: Resumes the bot.
*   `/overlord_stop`: Pauses the bot (most commands will be disabled).
*   `/reloadQuotes`: Reloads the quotes from the source website.
*   `/postaa <message>`: Posts a message to the `SIKID` chat.
*   `/audio_test`: Sends a test audio file.
