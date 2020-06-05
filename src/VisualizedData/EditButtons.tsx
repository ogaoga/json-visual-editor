import React, { useCallback, SyntheticEvent } from 'react';

interface Props {
  data: any;
}

export const EditButtons: React.FC<Props> = ({ data }) => {
  const onCopyButtonClicked = useCallback((event: SyntheticEvent) => {
    if (navigator.clipboard) {
      const value = event.currentTarget.getAttribute('data-value') || '';
      navigator.clipboard.writeText(`${value}`);
    }
  }, []);

  return (
    <div className="d-flex flex-row">
      {navigator.clipboard &&
        (typeof data === 'string' || typeof data === 'number') && (
          <button
            title="Copy text"
            data-value={data}
            className="copy-button btn btn-sm btn-link ml-1"
            onClick={onCopyButtonClicked}
          >
            <i className="far fa-copy" />
          </button>
        )}
      <button className="copy-button btn btn-sm btn-link ml-1">
        <i className="far fa-trash-alt" />
      </button>
    </div>
  );
};
