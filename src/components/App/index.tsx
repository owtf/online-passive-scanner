import * as React from 'react';
import { Button, Form, FormControl, FormGroup, Grid, PageHeader, Row } from 'react-bootstrap';

export default class App extends React.Component<{}, {}> {

	constructor(props: {}) {
		super(props);
	}

	public handleSubmit = (e: React.FormEvent<Form>): void => {
		e.preventDefault();
	}

	public render(): JSX.Element {
		return (
			<Grid>
				<Row>
					<PageHeader>
						Online Passive Scanner<small>, Version: 1.0.1 , Release Lionheart</small>
					</PageHeader>
				</Row>
				<Row>
					<h4>Enter the Target URL</h4>
				</Row>
				<Row>
					<Form onSubmit={this.handleSubmit}>
						<FormGroup controlId="formGroupTarget">
							<FormControl type="text" placeholder="Eg: http://www.google.com" />
						</FormGroup>
						<Button bsStyle="primary" type="submit">
							Scan
  						</Button>
					</Form>
				</Row>
			</Grid>
		);
	}
}