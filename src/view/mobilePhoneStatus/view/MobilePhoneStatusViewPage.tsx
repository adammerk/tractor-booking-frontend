import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { i18n } from 'src/i18n';
import actions from 'src/modules/mobilePhoneStatus/view/mobilePhoneStatusViewActions';
import selectors from 'src/modules/mobilePhoneStatus/view/mobilePhoneStatusViewSelectors';
import MobilePhoneStatusView from 'src/view/mobilePhoneStatus/view/MobilePhoneStatusView';
import MobilePhoneStatusViewToolbar from 'src/view/mobilePhoneStatus/view/MobilePhoneStatusViewToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function MobilePhoneStatusPage() {
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
          [i18n('entities.mobilePhoneStatus.menu'), '/mobile-phone-status'],
          [i18n('entities.mobilePhoneStatus.view.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.mobilePhoneStatus.view.title')}
        </PageTitle>

        <MobilePhoneStatusViewToolbar match={match} />

        <MobilePhoneStatusView loading={loading} record={record} />
      </ContentWrapper>
    </>
  );
}

export default MobilePhoneStatusPage;
