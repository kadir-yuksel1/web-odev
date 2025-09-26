import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import { IoIosArrowDown } from "react-icons/io";
import { educationData } from '../../data/EducationData';
import { useState } from 'react';

function Education() {

  const [expanded, setExpanded] = useState<string | false>('ilkokul');

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
      console.log(event)
    };

  return (
    <div className='flex flex-col items-center justify-evenly gap-5'>
      {
        educationData.map((educationData, index) => (
          <div key={index} className='w-full !border-black-5 rounded-md '>
            <Accordion expanded={expanded === `${educationData.level}`} onChange={handleChange(`${educationData.level}`)}>
              <AccordionSummary
                expandIcon={<IoIosArrowDown />}
                aria-controls={educationData.level}
                id={`${educationData.level}id`}
              >
                <Typography component="span">{educationData.level}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <div className='flex flex-row items-center justify-center '>
                  <div className='w-full'>
                    <img src={educationData.photo} width={500} height={200} alt="" />
                  </div>
                  <div>
                    <ul>
                      <li>
                        + {educationData.schoolName}
                      </li>
                      <li>
                        + {educationData.years}
                      </li>
                      <li>
                        + {educationData.story}
                      </li>
                      <li>
                        + {educationData.personelDevelopment}
                      </li>
                    </ul>
                  </div>
                </div>
              </AccordionDetails>
            </Accordion>
          </div>
        ))
      }
    </div>
  )
}

export default Education