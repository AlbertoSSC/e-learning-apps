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
        <Typography variant="h5" component={"h4"}>{title}</Typography>
        <Typography variant="inherit">{subtitle}</Typography>
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
