import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { i18n } from 'src/i18n';
import actions from 'src/modules/machines/view/machinesViewActions';
import selectors from 'src/modules/machines/view/machinesViewSelectors';
import MachinesView from 'src/view/machines/view/MachinesView';
import MachinesViewToolbar from 'src/view/machines/view/MachinesViewToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function MachinesPage() {
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
          [i18n('entities.machines.menu'), '/machines'],
          [i18n('entities.machines.view.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.machines.view.title')}
        </PageTitle>

        <MachinesViewToolbar match={match} />

        <MachinesView loading={loading} record={record} />
      </ContentWrapper>
    </>
  );
}

export default MachinesPage;
