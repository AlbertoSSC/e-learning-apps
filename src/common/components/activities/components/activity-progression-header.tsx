import { Typography } from '@mui/material';

import { CircularWithValueLabel } from '@/common/utils';

import { activityContent, circularProgress, contentHeader } from '@/styles';

interface Props {
  title: string;
  subtitle: string;
  detail?: string;
  totalExercises: number;
  completed: number;
}

export const ActivityProgressHeader: React.FC<Props> = props => {
  const { title, subtitle, totalExercises, completed } = props;

  return (
    <article css={[activityContent, contentHeader]}>
      <section>
        <Typography variant="h5">{title}</Typography>
        <Typography variant="inherit" color="#aaa">
          {subtitle}
        </Typography>
        {/* <details style={{color: "#999"}}>
          <summary>Detalles</summary>
          <Typography variant="caption" color="text.secondary">
            {detail}
          </Typography>
        </details> */}
      </section>

      <section css={circularProgress}>
        <CircularWithValueLabel
          exercises={totalExercises}
          completed={completed}
        />
      </section>
    </article>
  );
};
