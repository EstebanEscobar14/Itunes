### Challenge Final Angular

#### Running the Application

To run the Podcaster application developed in Angular, follow these steps:

1. **Clone the Repository:**
   ```bash
   git clone https://gitlab.nfqsolutions.es/nworld/nter/engineering/develop-team/juan-escobar/prueba-tecnica.git
   cd prueba-tecnica
   ```

2. **Install Dependencies:**
   ```bash
   npm install
   ```

3. **Run the Application in Development Mode:**
   ```bash
   ng serve
   ```

4. **Access the Application:**
   Open your web browser and go to [http://localhost:4200](http://localhost:4200).

#### Architecture and Structure of the Project

The project is structured following Angular's standard conventions:

- **`src/app/`**: Contains components, services, and other necessary files for the application.
  - **`components/`**: Directory where Angular components are located.
  - **`services/`**: Directory where services interacting with the iTunes API are defined.
  - **`interfaces/`**: Optional directory where interfaces or classes representing data can be defined.
  - **`assets/`**: Contains static resources such as images or JSON files.
  - **`environments/`**: Environment configuration for development (`environment.ts`) and production (`environment.prod.ts`).
- **`angular.json`**: Angular CLI configuration for building and running the project.
- **`package.json`**: npm configuration file listing project dependencies and execution scripts.

#### Relevant Project Information

The Podcaster application is a Single Page Application (SPA) that allows users to explore podcasts and episodes using the iTunes API. Here are some key features:

- **Main View**: Displays the top 100 most popular podcasts with filtering options by podcast title and author's name.
- **Episodes View**: Presents details of a selected podcast, including a list of its episodes with title, publication date, and duration.
- **Episode and Player View**: Provides detailed information about a specific episode along with a basic HTML5 audio player.

#### Build Modes

The application is configured with two build modes:

- **Development**: Assets are served unminified to aid in debugging and development.
- **Production**: Assets are concatenated, minified, and optimized to improve performance and loading efficiency in production.
