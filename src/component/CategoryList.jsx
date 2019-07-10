import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';

class CategoryList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			checked: []
		}
	}

	handleToggle = value => {
		const currentIndex = this.state.checked.indexOf(value);
		const newChecked = [...this.state.checked];

		if (currentIndex === -1) {
			newChecked.push(value);
		} else {
			newChecked.splice(currentIndex, 1);
		}
		this.setState({
			checked: newChecked
		});
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.checked && nextProps.checked !== this.props.checked) {
			this.setState({ checked: nextProps.checked });
		}
	}

	render() {
		const { classes } = this.props;
		return (
		  <Grid container spacing={2}>
			  <Grid className={classes.item} item xs={12}>
				  <FormLabel className={classes.filterFormLabel}>
					  Categories
				  </FormLabel>
			  </Grid>
			  <Grid className={classes.item} item xs={6}>
				  <List className={`${classes.root}`}>
					  {this.props.categories.map((value, index) => {
						  if (index > 16) {
							  return ""
						  }
						  const labelId = `checkbox-list-label-${value}`;

						  return (
							<ListItem
							  key={index}
							  className={classes.listItem}
							  dense
							  button
							  onClick={() => this.handleToggle(value)}
							>
								<ListItemIcon className={classes.listItemIcon}>
									<Checkbox
									  className={classes.checkBox}
									  edge="start"
									  color="default"
									  checked={this.state.checked.indexOf(value) !== -1}
									  tabIndex={-1}
									  disableRipple
									  inputProps={{ 'aria-labelledby': labelId }}
									/>
								</ListItemIcon>
								<ListItemText
								  id={labelId}
								  primary={value}
								  style={{
									  color: this.state.checked.indexOf(value) !== -1 ? "#51cdfb" : undefined
								  }}
								/>
							</ListItem>
						  );
					  })}
				  </List>
			  </Grid>
			  <Grid className={classes.item} item xs={6}>
				  <List>
					  {this.props.categories.map((value, index) => {
						  if (index <= 16) {
							  return ""
						  }
						  const labelId = `checkbox-list-label-${value}`;

						  return (
							<ListItem
							  key={index}
							  className={classes.listItem}
							  dense
							  button
							  onClick={() => this.handleToggle(value)}
							>
								<ListItemIcon className={classes.listItemIcon}>
									<Checkbox
									  className={classes.checkBox}
									  edge="start"
									  color="default"
									  checked={this.state.checked.indexOf(value) !== -1}
									  tabIndex={-1}
									  disableRipple
									  inputProps={{ 'aria-labelledby': labelId }}
									/>
								</ListItemIcon>
								<ListItemText
								  id={labelId}
								  primary={value}
								  style={{
									  color: this.state.checked.indexOf(value) !== -1 ? "#51cdfb" : undefined
								  }}
								/>
							</ListItem>
						  );
					  })}
				  </List>
			  </Grid>
		  </Grid>
		)
	}
}

const styles = {
	listItem: {
		height: '30px'
	},
	listItemIcon: {
		minWidth: '5px'
	},
	checkBox: {
		color: '#51cdfb',
	},
	filterFormLabel: {
		fontSize: "0.8rem",
		fontWeight: "bolder",
		color: "black"
	}
};
export default withStyles(styles)(CategoryList);