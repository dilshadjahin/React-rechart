import { LineChart as LChart, Line } from 'recharts';
import { StudentData } from './Data';

const LineChart = () => {
    
    return (
        <div className='w-[400px] h-[300px]'>

            <LChart width={500} height={400} data={StudentData}>

            <Line dataKey="math_marks" stroke='blue'></Line>

            </LChart>    
        </div>
    );
};

export default LineChart;


