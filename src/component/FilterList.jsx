import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import FormLabel from '@material-ui/core/FormLabel';
import Grid from '@material-ui/core/Grid';
import Icon from '@material-ui/core/Icon';
import Tooltip from '@material-ui/core/Tooltip';
import Chip from '@material-ui/core/Chip';

class FilterList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			keywords: [],
			filterValues: {
				avgMonthlySales: {
					min: "",
					max: ""
				},
				avgMonthlyRevenue: {
					min: "",
					max: ""
				},
				averagePrice: {
					min: "",
					max: ""
				},
				averageReviewCount: {
					min: "",
					max: ""
				}
			}
		}
	}

	CustomizedTextField = props => (
	  <TextField
		fullWidth
		defaultValue={props.value}
		className={this.props.classes.textField}
		InputProps={{
			className: this.props.classes.textFieldInput,
			onKeyUp: props.onKeyUp,
			onChange: props.onChange
		}}
		placeholder={props.placeholder}
		margin="normal"
		type={props.type ? props.type : undefined}
	  />
	)

	CustomizedArrowIcon = () => (
	  <Icon color={"disabled"} className={this.props.classes.rightArrowIcon}>arrow_right_alt </Icon>
	)

	CustomizedHelpIcon = props => (
	  <Tooltip title={props.title}>
		  <Icon className={this.props.classes.helpIcon}>help_outline</Icon>
	  </Tooltip>
	)

	handleAddNewKeyword = (event) => {
		const pressedKey = event.key;
		const currentValue = event.target.value;
		if (pressedKey === "Enter" && currentValue.trim() !== "") {
			event.target.value = "";
			this.setState(prevState => {
				return { keywords: [...prevState.keywords, currentValue] }
			});
		}
	}

	handleDeleteKeyword = (index) => {
		this.setState(prevState => {
			  prevState.keywords.splice(index, 1);
			  return { keywords: [...prevState.keywords] }
		  }
		);
	}

	validateOnChangePositiveInteger = event => {
		if (!event.target.value.match(/^[0-9]*$/)) {
			event.target.value =
			  event.target.value.substring(0, event.target.value.length - 1);
		}
	}

	validateOnChangePositiveFloat = event => {
		if (!event.target.value.match(/^[0-9]*\.?[0-9]*$/)) {
			event.target.value =
			  event.target.value.substring(0, event.target.value.length - 1);
		}
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.filterValues !== this.props.filterValues) {
			this.setState({ filterValues: nextProps.filterValues });
		}
	}

	render() {
		console.log("rendering");
		const { classes } = this.props;
		return (
		  <Grid container>
			  <Grid item xs={6} className={classes.filterLine}>
				  <Grid container>
					  <Grid item xs={12}>
						  <FormLabel className={classes.filterFormLabel}>
							  Avg Monthly Sales (Units)
						  </FormLabel>
						  <this.CustomizedHelpIcon title="Average estimated monthly number of units sold"/>
					  </Grid>
					  <Grid item xs={5}>
						  <this.CustomizedTextField
							placeholder="Min"
							value={this.state.filterValues.avgMonthlySales.min}
							onChange={this.validateOnChangePositiveInteger}
						  />
					  </Grid>
					  <Grid item xs={1} className={classes.rightArrowIconGrid}>
						  <this.CustomizedArrowIcon/>
					  </Grid>
					  <Grid item xs={5}>
						  <this.CustomizedTextField
							placeholder="Max"
							value={this.state.filterValues.avgMonthlySales.max}
							onChange={this.validateOnChangePositiveInteger}
						  />
					  </Grid>
				  </Grid>
			  </Grid>
			  <Grid item xs={6}>
				  <Grid container>
					  <Grid item xs={12}>
						  <FormLabel className={classes.filterFormLabel}>
							  Avg Monthly Revenue
						  </FormLabel>
						  <this.CustomizedHelpIcon title="Average estimated monthly revenue"/>
					  </Grid>
					  <Grid item xs={5}>
						  <this.CustomizedTextField
							placeholder="Min"
							value={this.state.filterValues.avgMonthlyRevenue.min}
							onChange={this.validateOnChangePositiveFloat}
						  />
					  </Grid>
					  <Grid item xs={1} className={classes.rightArrowIconGrid}>
						  <this.CustomizedArrowIcon/>
					  </Grid>
					  <Grid item xs={5}>
						  <this.CustomizedTextField
							placeholder="Max"
							value={this.state.filterValues.avgMonthlyRevenue.max}
							onChange={this.validateOnChangePositiveFloat}
						  />
					  </Grid>
				  </Grid>
			  </Grid>
			  <Grid item xs={6}>
				  <Grid container>
					  <Grid item xs={12}>
						  <FormLabel className={classes.filterFormLabel}>
							  Average Price
						  </FormLabel>
						  <this.CustomizedHelpIcon title="Average listed price"/>
					  </Grid>
					  <Grid item xs={5}>
						  <this.CustomizedTextField
							placeholder="Min"
							value={this.state.filterValues.averagePrice.min}
							onChange={this.validateOnChangePositiveFloat}
						  />
					  </Grid>
					  <Grid item xs={1} className={classes.rightArrowIconGrid}>
						  <this.CustomizedArrowIcon/>
					  </Grid>
					  <Grid item xs={5}>
						  <this.CustomizedTextField
							placeholder="Max"
							value={this.state.filterValues.averagePrice.max}
							onChange={this.validateOnChangePositiveFloat}
						  />
					  </Grid>
				  </Grid>
			  </Grid>
			  <Grid item xs={6}>
				  <Grid container>
					  <Grid item xs={12}>
						  <FormLabel className={classes.filterFormLabel}>
							  Average Review Count
						  </FormLabel>
						  <this.CustomizedHelpIcon title="Total review quantity"/>
					  </Grid>
					  <Grid item xs={5}>
						  <this.CustomizedTextField
							placeholder="Min"
							value={this.state.filterValues.averageReviewCount.min}
							onChange={this.validateOnChangePositiveFloat}
						  />
					  </Grid>
					  <Grid item xs={1} className={classes.rightArrowIconGrid}>
						  <this.CustomizedArrowIcon/>
					  </Grid>
					  <Grid item xs={5}>
						  <this.CustomizedTextField
							placeholder="Max"
							value={this.state.filterValues.averageReviewCount.max}
							onChange={this.validateOnChangePositiveFloat}
						  />
					  </Grid>
				  </Grid>
			  </Grid>
			  <Grid item xs={6}>
				  <Grid container>
					  <Grid item xs={12}>
						  <FormLabel className={classes.filterFormLabel}>
							  Keyword Contains
						  </FormLabel>
						  <this.CustomizedHelpIcon title="Search using entire or partial keyword matches"/>
					  </Grid>
					  <Grid item xs={11}>
						  <this.CustomizedTextField placeholder="Keyword phrase" onKeyUp={this.handleAddNewKeyword}/>
						  {this.state.keywords.map((keyword, index) => (
							<Chip
							  key={index}
							  label={keyword}
							  onDelete={() => this.handleDeleteKeyword(index)}
							/>
						  ))}
					  </Grid>
				  </Grid>
			  </Grid>
		  </Grid>
		)
	}
}

const styles = {
	filterLine: {
		marginBottom: "10px"
	},
	textField: {
		marginTop: "5px",
	},
	textFieldInput: {
		paddingLeft: "10px"
	},
	helpIcon: {
		fontSize: "0.8rem",
		fontWeight: "bold",
		color: "#51cdfb",
		marginLeft: "5px"
	},
	filterFormLabel: {
		fontSize: "0.8rem",
		fontWeight: "bolder",
		color: "black"
	},
	rightArrowIconGrid: {
		textAlign: "center"
	},
	rightArrowIcon: {
		marginTop: "8px",
	}
};
export default withStyles(styles)(FilterList);