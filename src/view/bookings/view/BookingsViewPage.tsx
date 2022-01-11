import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { i18n } from 'src/i18n';
import actions from 'src/modules/bookings/view/bookingsViewActions';
import selectors from 'src/modules/bookings/view/bookingsViewSelectors';
import BookingsView from 'src/view/bookings/view/BookingsView';
import BookingsViewToolbar from 'src/view/bookings/view/BookingsViewToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function BookingsPage() {
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
          [i18n('entities.bookings.menu'), '/bookings'],
          [i18n('entities.bookings.view.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.bookings.view.title')}
        </PageTitle>

        <BookingsViewToolbar match={match} />

        <BookingsView loading={loading} record={record} />
      </ContentWrapper>
    </>
  );
}

export default BookingsPage;
