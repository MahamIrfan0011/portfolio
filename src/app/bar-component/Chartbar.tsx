import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Register required components for Chart.js
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BarChart = () => {
  const data = {
    labels: [
      'HTML',
      'CSS',
      'TypeScript',
      'Tailwind css',
      'Next.js',
      'Adobe Photoshop',
      'Adobe Illustrator',
      'Adobe After Effect',
      'Figma to code',
      'Cartoon Animator',
      'Python', // Naye labels add kiye
    ], // Skills
    datasets: [
      {
        label: 'Proficiency (%)',
        data: [70, 80, 75, 95, 85, 70, 75, 50, 95, 50, 0], // Naye data points add kiye
        backgroundColor: [
          '#1e40af', // Tailwind Blue
          '#9333ea', // Tailwind Purple
          '#facc15', // Tailwind Yellow
          '#e11d48', // Tailwind Red
          '#22c55e', // Tailwind Green
          '#ff5733', // React ka color
          '#ff8c00', // Vue.js ka color
          '#4caf50', // Adobe Illustrator ka color
          '#3b82f6', // Adobe After Effect ka color
          '#eab308', // Figma ka color
          '#7c3aed', // Tailwind Purple ka extra color
        ],
        borderColor: '#e2e8f0', // Tailwind Gray
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false, // This allows the chart to adapt to the container size
    plugins: {
      legend: {
        position: 'top' as const,
        labels: {
          font: {
            weight: 'bold' as 'bold',
          },
        },
      },
    },
    scales: {
      x: {
        ticks: {
          font: {
            size: 8,
          },
        },
      },
      y: {
        ticks: {
          font: {
            size: 10, // Font size for y-axis labels (optional)
          },
        },
      },
    },
  };

  return (
    <div className="max-w-4xl mx-auto bg-white p-4 shadow-lg rounded-lg" style={{ height: '400px' }}>
      <Bar data={data} options={options} />
    </div>
  );
};

export default BarChart;

