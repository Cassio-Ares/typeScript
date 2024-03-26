

type TitleProps = {
    title: string;
  };

const EnvioDeProps = ({ nameBtn, title }: { nameBtn?: string } & TitleProps) => {
  return (
   <div>
     <h1>{title}</h1>
     <button>{nameBtn}</button>
   </div>
  )
}

export default EnvioDeProps

/**
 * type EnvioDePropsProps = {
  nameBtn: string;
  title: string;
};

const EnvioDeProps = ({ nameBtn, title }: EnvioDePropsProps) => {
  return (
    <div>
      <h1>{title}</h1>
      <button>{nameBtn}</button>
    </div>
  );
};

export default EnvioDeProps;
 */

/**
 * const EnvioDeProps = ({ nameBtn, title, count1, count2, isActive }: { 
  nameBtn: string; 
  title: string; 
  count1: number;
  count2: number;
  isActive: boolean;
}) => 
 */