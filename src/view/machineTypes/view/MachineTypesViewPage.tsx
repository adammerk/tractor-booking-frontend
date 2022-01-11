import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { i18n } from 'src/i18n';
import actions from 'src/modules/machineTypes/view/machineTypesViewActions';
import selectors from 'src/modules/machineTypes/view/machineTypesViewSelectors';
import MachineTypesView from 'src/view/machineTypes/view/MachineTypesView';
import MachineTypesViewToolbar from 'src/view/machineTypes/view/MachineTypesViewToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function MachineTypesPage() {
  const dispatch = useDispatch();
  const match = useRouteMatch();

  const loading = useSelector(selectors.selectLoading);
  const record = useSelector(selectors.selectRecord);

  useEffect(() => {
    dispatch(actions.doFind(match.params.id));
  }, [dispatch, match.params.id]);

  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.machineTypes.menu'), '/machine-types'],
          [i18n('entities.machineTypes.view.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.machineTypes.view.title')}
        </PageTitle>

        <MachineTypesViewToolbar match={match} />

        <MachineTypesView loading={loading} record={record} />
      </ContentWrapper>
    </>
  );
}

export default MachineTypesPage;
