import React, { useState, useCallback } from 'react';

interface Props {
  defaultValue: boolean;
  onChangeExpansion?: (flag: boolean) => void;
}

const Expander: React.FC<Props> = ({ defaultValue, onChangeExpansion }) => {
  const [expanded, setExpanded] = useState(defaultValue);

  const onClick = useCallback(() => {
    const newValue = !expanded;
    setExpanded(newValue);
    onChangeExpansion && onChangeExpansion(newValue);
  }, [expanded, onChangeExpansion]);

  const classes = [
    'component-expander',
    expanded ? 'expanded' : '',
    'mdl-button',
    'mdl-js-button',
  ].join(' ');

  return (
    <button className={classes} onClick={onClick}>
      <i className="material-icons">expand_more</i>
    </button>
  );
};

export default Expander;
