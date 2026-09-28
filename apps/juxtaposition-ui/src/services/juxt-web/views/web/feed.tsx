import cx from 'classnames';
import { WebNavBar } from '@/services/juxt-web/views/web/navbar';
import { WebRoot, WebWrapper } from '@/services/juxt-web/views/web/root';
import { WebReportModalView } from '@/services/juxt-web/views/web/reportModalView';
import { T } from '@/services/juxt-web/views/common/components/T';
import type { ReactNode } from 'react';

export type FeedViewProps = {
	children: ReactNode | ReactNode[];
};

export type FeedTabsProps = {
	selected: number;
};

function feedPageTitle(selected: number): string {
	switch (selected) {
		case 0: return T.str("global.my_feed");
		case 1: return T.str("global.people_feed");
		case 2: return T.str("global.global_feed");
		default: return T.str("global.activity_feed"); 
	}

}

export function WebFeedTabs(props: FeedTabsProps): ReactNode {
	return (
		<>
			<div className="buttons tabs" style={{ marginBottom: '1.5em' }}>
				<a
					id="my-feed"
					href="/feed"
					className={cx({
						selected: props.selected == 0
					})}
				>
					<T k="global.my_feed" />
				</a>
				<a
					id="people-feed"
					href="/feed/people"
					className={cx({
						selected: props.selected == 1
					})}
				>
					<T k="global.people_feed" />
				</a>
				<a
					id="all-feed"
					href="/feed/all"
					className={cx({
						selected: props.selected == 2
					})}
				>
					<T k="global.global_feed" />
				</a>
			</div>
		</>
	);
}

export function WebPersonalFeedView(props: FeedViewProps): ReactNode {
	return (
		<WebRoot pageTitle={feedPageTitle(0)}>
			<h2 id="title" className="page-header">
				<T k="global.activity_feed" />
			</h2>
			<WebNavBar selection={1} />
			<div id="toast"></div>
			<WebWrapper>
				<WebFeedTabs selected={0} />
				{props.children}
			</WebWrapper>
			<WebReportModalView />
		</WebRoot>
	);
}

export function WebPeopleFeedView(props: FeedViewProps): ReactNode {
	return (
		<WebRoot pageTitle={feedPageTitle(1)}>
			<h2 id="title" className="page-header">
				<T k="global.activity_feed" />
			</h2>
			<WebNavBar selection={1} />
			<div id="toast"></div>
			<WebWrapper>
				<WebFeedTabs selected={1} />
				{props.children}
			</WebWrapper>
			<WebReportModalView />
		</WebRoot>
	);
}

export function WebGlobalFeedView(props: FeedViewProps): ReactNode {
	return (
		<WebRoot pageTitle={feedPageTitle(2)}>
			<h2 id="title" className="page-header">
				<T k="global.activity_feed" />
			</h2>
			<WebNavBar selection={1} />
			<div id="toast"></div>
			<WebWrapper>
				<WebFeedTabs selected={2} />
				{props.children}
			</WebWrapper>
			<WebReportModalView />
		</WebRoot>
	);
}
