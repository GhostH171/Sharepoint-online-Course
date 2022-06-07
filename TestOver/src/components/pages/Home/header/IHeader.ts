export interface IHeaderProps {
  setTodo: React.Dispatch<
    React.SetStateAction<{
      title: string;
      day: Date;
      setCompleted: boolean;
    }>
  >;
}
