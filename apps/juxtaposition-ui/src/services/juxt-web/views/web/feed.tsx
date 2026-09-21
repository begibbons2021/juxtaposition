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

export function WebFeedHead(props : FeedTabsProps): ReactNode {
	var name: string;

	switch (props.selected) {
		case 0: name = T.str("global.my_feed"); break;
		case 1: name = T.str("global.people_feed"); break;
		case 2: name = T.str("global.global_feed"); break;
		default: name = T.str("global.activity_feed"); break;
	}

	const title = `Juxt - ${name}`;
	
	return (
		<>
			<title>{title}</title>
		</>
	);
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

// export function WebFeedViewWrapper(tabProps: FeedTabsProps, viewProps: FeedViewProps) {
// 	return (
// 		<WebRoot head={ <WebFeedHead {...tabProps} />}>
// 			{/* Use the selected tab to fill the view with the appropriate page */}
// 			{((tabProps, viewProps) => 
// 				{ switch (tabProps.selected) {
// 						case 1: return <WebPeopleFeedView {...viewProps}/>;
// 						case 2: return <WebGlobalFeedView {...viewProps}/>;
// 						default: return <WebPersonalFeedView {...viewProps}/>;
// 					}
// 				})(tabProps, viewProps)
// 			}
// 		</WebRoot>
// 	);
// }

export function WebPersonalFeedView(props: FeedViewProps): ReactNode {
	return (
		<WebRoot head={<WebFeedHead selected={0}/>}>
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
		<WebRoot head={<WebFeedHead selected={1}/>}>
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
		<WebRoot head={<WebFeedHead selected={2}/>}>
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
